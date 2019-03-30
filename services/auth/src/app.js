// Load required packages
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const session = require('express-session');
const passport = require('passport');
const path = require('path');
const authController = require('./controllers/auth');
const userController = require('./controllers/user');

// Connect to the beerlocker MongoDB
mongoose.connect(process.env.MONGODB_CONNECTION);

// Create our Express application
const app = express();

// Set view engine to ejs
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');

// Use the body-parser package in our application
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

// Use express session support since OAuth2orize requires it
app.use(
  session({
    secret: 'Super Secret Session Key',
    saveUninitialized: true,
    resave: true
  })
);

// Use the passport package in our application
app.use(passport.initialize());

// Create our Express router
const router = express.Router();

// Create endpoint handlers for /users
router
  .route('/users')
  .post(userController.addUsers)
  .get(authController.isAuthenticated, userController.getUsers);

// Create endpoint handlers for /clients
router
  .route('/auth')
  .post(authController.isAuthenticated, authController.getBody)
  .get(authController.isAuthenticated, authController.getBody);

//Protected resource
router.route('/home').get(authController.isAuthenticated, (req, res, next) => {
  try {
    res.send('This is home');
  } catch (error) {
    next(error);
  }
});

// Register all our routes with /api
app.use('/api', router);

// Start the server
app.listen(3000);
