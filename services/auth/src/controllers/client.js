// Load required packages
const { Client } = require('../models');
const { identity } = require('../utils');

// Create endpoint /api/client for POST
exports.addClient = function(req, res, next) {
  // Create a new instance of the Client model
  try {
    const client = new Client();

    // Set the client properties that came from the POST data
    client.name = req.body.name;
    client.id = identity.nextId();
    client.userId = req.user._id;

    // Save the client and check for errors
    client.save(function(err) {
      if (err) return res.send(err);

      res.send({ message: 'New client was created', data: client });
    });
  } catch (error) {
    next(error);
  }
};

// Create endpoint /api/clients for GET
exports.getClients = function(req, res) {
  // Use the Client model to find all clients
  Client.find({ userId: req.user._id }, function(err, clients) {
    if (err) return res.send(err);

    res.json(clients);
  });
};
