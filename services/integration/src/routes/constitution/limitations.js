const Router = require('express').Router();
const limitations = require('../../controllers/constitution/limitations');

Router.post('/', limitations.create);
Router.get('/:id', limitations.get);
Router.get('/', limitations.find);
Router.put('/:id', limitations.update);
Router.delete('/:id', limitations.remove);

module.exports = Router;