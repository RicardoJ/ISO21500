const Router = require('express').Router();
const planning = require('../../controllers/planning/planning');

Router.get('/', planning.find);
Router.get('/:id', planning.get);
Router.post('/', planning.create);
Router.put('/:id', planning.update);
Router.delete('/:id', planning.remove);

module.exports = Router;
