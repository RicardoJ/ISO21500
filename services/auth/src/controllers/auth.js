'use strict';

const passport = require('passport');
const BasicStrategy = require('passport-http').BasicStrategy;

const BearerStrategy = require('passport-http-bearer').Strategy;

const { Token, User } = require('../models');
const { identity } = require('../utils');
/**
 * LocalStrategy
 *
 * This strategy is used to authenticate users based on a username and password.
 * Anytime a request is made to authorize an application, we must ensure that
 * a user is logged in before asking them to approve the request.
 */

const authenticate = (username, password, callback) => {
  try {
    User.findOne({ username }, async function(err, user) {
      if (err) return callback(err);
      

      // No user found with that username
      if (!user) return callback(null, false);

      // Make sure the password is correct
      if (user.password !== password) {
        
        return callback(null, false);
      }

      // Create a new access token
      var token = new Token({
        value: identity.nextId(),
        userId: user._id
      });
      
      // Save the access token and check for errors
      await token.save(function(err) {
        if (err) {
          console.log(err);
          return callback(err);
        }
      });

      return callback(null, { user, token });
    });
  } catch (error) {
    throw error;
  }
};

passport.use(new BasicStrategy(authenticate));

exports.getBody = function(req, res) {
  const username = req.body.username;
  const password = req.body.password;
  const functionCallback = (err, data) => res.send(data);

  authenticate(username, password, functionCallback);
};

passport.serializeUser((user, done) => done(null, user._id));

passport.deserializeUser((id, done) => {
  db.users.findById(id, (error, user) => done(error, user));
});


/**
 * BearerStrategy
 *
 * This strategy is used to authenticate either users or clients based on an access token
 * (aka a bearer token). If a user, they must have previously authorized a client
 * application, which is issued an access token to make requests on behalf of
 * the authorizing user.
 */
passport.use(
  new BearerStrategy((accessToken, callback) => {
    Token.findOne({ value: accessToken }, function(err, token) {
      if (err) return callback(err);

      // No token found
      if (!token) return callback(null, false);

      User.findOne({ _id: token.userId }, function(err, user) {
        if (err) return callback(err);

        // No user found
        if (!user) return callback(null, false);

        // Simple example with no scope
        callback(null, user, { scope: '*' });
      });
    });
  })
);

exports.isAuthenticated = passport.authenticate(['basic', 'bearer'], {
  session: false
});

exports.isBearerAuthenticated = passport.authenticate('bearer', {
  session: false
});
