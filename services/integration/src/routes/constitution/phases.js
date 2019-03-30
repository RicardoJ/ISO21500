const Router = require('express').Router();
const phases = require('../../controllers/constitution/phases');

Router.post('/', phases.create);
Router.get('/:id', phases.get);
Router.get('/', phases.find);
Router.put('/:id', phases.update);
Router.delete('/:id', phases.remove);

module.exports = Router;