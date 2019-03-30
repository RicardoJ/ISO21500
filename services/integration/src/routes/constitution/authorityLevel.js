const Router = require('express').Router();
const authorityLevel = require('../../controllers/constitution/authorityLevel');

Router.post('/', authorityLevel.create);
Router.get('/:id', authorityLevel.get);
Router.get('/', authorityLevel.find);
Router.put('/:id', authorityLevel.update);
Router.delete('/:id', authorityLevel.remove);

module.exports = Router;