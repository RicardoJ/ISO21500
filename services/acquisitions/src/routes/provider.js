const Router = require('express').Router();
const provider = require('../controllers/provider');

Router.post('/', provider.create);
Router.get('/:id', provider.get);
Router.get('/', provider.find);
Router.put('/:id', provider.update);
Router.delete('/:id', provider.remove);

module.exports = Router;