const Router = require('express').Router();
const TeamsRouter = require('./teams');
const MembersRouter = require('./members');


Router.use('/teams', TeamsRouter);
Router.use('/members', MembersRouter);

module.exports = Router;
