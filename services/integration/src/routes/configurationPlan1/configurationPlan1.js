const Router = require('express').Router();
const configurationPlan1 = require('../../controllers/configurationPlan1/configurationPlan1');

Router.get('/', configurationPlan1.find);
Router.get('/:id', configurationPlan1.get);
Router.post('/', configurationPlan1.create);
Router.put('/:id', configurationPlan1.update);
Router.delete('/:id', configurationPlan1.remove);

module.exports = Router;
