const Router = require('express').Router();
const documentationPlan = require('../../controllers/configurationPlan1/documentationPlan');

Router.get('/', documentationPlan.find);
Router.get('/:id', documentationPlan.get);
Router.post('/', documentationPlan.create);
Router.put('/:id', documentationPlan.update);
Router.delete('/:id', documentationPlan.remove);

module.exports = Router;
