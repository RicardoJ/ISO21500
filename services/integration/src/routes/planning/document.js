const Router = require('express').Router();
const document = require('../../controllers/planning/documents');

Router.get('/', document.find);
Router.get('/:id', document.get);
Router.post('/', document.create);
Router.put('/:id', document.update);
Router.delete('/:id', document.remove);

module.exports = Router;
