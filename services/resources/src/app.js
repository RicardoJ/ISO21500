const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = function appBuilder({ router, port, baseUrl }) {
  //Building Express server
  const server = express();
server.use(bodyParser.urlencoded({ extended: false }))
server.use(bodyParser.json())
server.use(baseUrl, router);

  //Connecting to MongoDB database
  mongoose.connect(process.env.DB_CONNECTION_STRING, { useNewUrlParser: true });

  return {
    start: () =>
      server.listen(port, () => console.log(`App listening on port ${port}!`))
  };
};

module.exports = app;
