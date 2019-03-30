const Router = require('express').Router();
const roles = require('../../controllers/configurationPlan1/roles');

Router.get('/', roles.find);
Router.get('/:id', roles.get);
Router.post('/', roles.create);
Router.put('/:id', roles.update);
Router.delete('/:id', roles.remove);

module.exports = Router;
