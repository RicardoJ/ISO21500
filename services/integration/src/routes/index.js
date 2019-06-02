const Router = require('express').Router();
const ProjectRouter = require('./projects');
const ConstitutionRouter = require('./constitution');
const PrevInfoRouter = require('./previousInformation/PreviousInformation');

Router.use('/projects', ProjectRouter);
Router.use('/projects', ConstitutionRouter);
Router.use('/projects/:id/integration/constitution/prev-info', PrevInfoRouter);

module.exports = Router;
