const Router = require('express').Router();
const objective = require('../../controllers/constitution/objective');

Router.post('/', objective.create);
Router.get('/:id', objective.get);
Router.get('/', objective.find);
Router.put('/:id', objective.update);
Router.delete('/:id', objective.remove);

module.exports = Router;