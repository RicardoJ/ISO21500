const Router = require('express').Router();
const otherRequirements = require('../../controllers/constitution/otherRequirements');

Router.post('/', otherRequirements.create);
Router.get('/:id', otherRequirements.get);
Router.get('/', otherRequirements.find);
Router.put('/:id', otherRequirements.update);
Router.delete('/:id', otherRequirements.remove);

module.exports = Router;