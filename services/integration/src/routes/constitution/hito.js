const Router = require('express').Router();
const hito = require('../../controllers/constitution/hito');

Router.post('/', hito.create);
Router.get('/:id', hito.get);
Router.get('/', hito.find);
Router.put('/:id', hito.update);
Router.delete('/:id', hito.remove);

module.exports = Router;