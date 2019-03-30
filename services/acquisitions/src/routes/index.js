const Router = require('express').Router();
const ProviderRouter = require('./provider');
const AcquisitionsRouter = require('./acquisition');


Router.use('/providers', ProviderRouter);
Router.use('/acquisitions' ,AcquisitionsRouter);


module.exports = Router;
