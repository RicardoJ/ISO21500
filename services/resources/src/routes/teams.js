const Router = require('express').Router();
const teams = require('../controllers/teams');

Router.get('/', teams.find);
Router.get('/:id', teams.get);
Router.post('/', teams.create);
Router.put('/:id', teams.update);
Router.delete('/:id', teams.remove);

module.exports = Router;
