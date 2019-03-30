require('dotenv').config();
const application = require('./src/app');
const router = require('./src/routes');

const baseUrl = '/api/v2';
const port = process.env.PORT || 5000;

application({ baseUrl, router, port }).start();
