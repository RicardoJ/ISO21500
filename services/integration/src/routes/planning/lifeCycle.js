const Router = require('express').Router();
const lifeCycle = require('../../controllers/planning/lifeCycle');

Router.get('/', lifeCycle.find);
Router.get('/:id', lifeCycle.get);
Router.post('/', lifeCycle.create);
Router.put('/:id', lifeCycle.update);
Router.delete('/:id', lifeCycle.remove);

module.exports = Router;
