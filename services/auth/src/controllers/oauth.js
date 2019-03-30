// Load required packages
const oauth2orize = require('oauth2orize');
const { identity } = require('../utils');
const { User, Client, Token, Code } = require('../models');

// Create OAuth 2.0 server
const server = oauth2orize.createServer();

// Register serialialization and deserialization functions.
//
// When a client redirects a user to user authorization endpoint, an
// authorization transaction is initiated.  To complete the transaction, the
// user must authenticate and approve the authorization request.  Because this
// may involve multiple HTTP request/response exchanges, the transaction is
// stored in the session.
//
// An application must supply serialization functions, which determine how the
// client object is serialized into the session.  Typically this will be a
// simple matter of serializing the client's ID, and deserializing by finding
// the client by ID from the database.

server.serializeClient(function(client, callback) {
  return callback(null, client._id);
});

server.deserializeClient(function(id, callback) {
  Client.findOne({ _id: id }, function(err, client) {
    if (err) {
      return callback(err);
    }
    return callback(null, client);
  });
});

// Register supported grant types.
//
// OAuth 2.0 specifies a framework that allows users to grant client
// applications limited access to their protected resources.  It does this
// through a process of the user granting access, and the client exchanging
// the grant for an access token.

// Grant authorization codes.  The callback takes the `client` requesting
// authorization, the `redirectUri` (which is used as a verifier in the
// subsequent exchange), the authenticated `user` granting access, and
// their response, which contains approved scope, duration, etc. as parsed by
// the application.  The application issues a code, which is bound to these
// values, and will be exchanged for an access token.

server.grant(
  oauth2orize.grant.code(function(client, redirectUri, user, ares, callback) {
    // Create a new authorization code
    const code = new Code({
      value: identity.nextId(),
      clientId: client._id,
      redirectionURL: redirectUri,
      userId: user._id
    });

    // Save the auth code and check for errors
    code.save(function(err) {
      if (err) return callback(err);

      callback(null, code.value);
    });
  })
);

// Exchange authorization codes for access tokens.  The callback accepts the
// `client`, which is exchanging `code` and any `redirectUri` from the
// authorization request for verification.  If these values are validated, the
// application issues an access token on behalf of the user who authorized the
// code.

server.exchange(
  oauth2orize.exchange.code(function(client, code, redirectUri, callback) {
    Code.findOne({ value: code }, function(err, authCode) {
      if (err) return callback(err);

      if (authCode === undefined) return callback(null, false);

      if (client._id.toString() !== authCode.clientId)
        return callback(null, false);

      if (redirectUri !== authCode.redirectUri) {
        return callback(null, false);
      }

      // Delete auth code now that it has been used
      authCode.remove(function(err) {
        if (err) {
          return callback(err);
        }

        // Create a new access token
        var token = new Token({
          value: identity.nextId(),
          clientId: authCode.clientId, //NO
          userId: authCode.userId //USER ID _id
        });

        // Save the access token and check for errors
        token.save(function(err) {
          if (err) {
            return callback(err);
          }

          callback(null, token);
        });
      });
    });
  })
);


exports.token = [server.token(), server.errorHandler()];

/**
 * Return a unique identifier with the given `len`.
 *
 *     utils.uid(10);
 *     // => "FDaS435D2z"
 *
 * @param {Number} len
 * @return {String}
 * @api private
 */
function uid(len) {
  var buf = [],
    chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
    charlen = chars.length;

  for (var i = 0; i < len; ++i) {
    buf.push(chars[getRandomInt(0, charlen - 1)]);
  }

  return buf.join('');
}

/**
 * Return a random int, used by `utils.uid()`
 *
 * @param {Number} min
 * @param {Number} max
 * @return {Number}
 * @api private
 */

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
