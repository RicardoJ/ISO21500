const Router = require('express').Router();
const configurationPlan2 = require('../../controllers/configurationPlan2/configurationPlan2');

Router.get('/', configurationPlan2.find);
Router.get('/:id', configurationPlan2.get);
Router.post('/', configurationPlan2.create);
Router.put('/:id', configurationPlan2.update);
Router.delete('/:id', configurationPlan2.remove);

module.exports = Router;
