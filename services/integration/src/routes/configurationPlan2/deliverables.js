const Router = require('express').Router();
const deliverables = require('../../controllers/configurationPlan2/deliverables');

Router.get('/', deliverables.find);
Router.get('/:id', deliverables.get);
Router.post('/', deliverables.create);
Router.put('/:id', deliverables.update);
Router.delete('/:id', deliverables.remove);

module.exports = Router;
