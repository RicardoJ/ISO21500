const Router = require('express').Router();
const members = require('../controllers/members');

Router.get('/', members.find);
Router.get('/:id', members.get);
Router.post('/', members.create);
Router.put('/:id', members.update);
Router.delete('/:id', members.remove);

module.exports = Router;
