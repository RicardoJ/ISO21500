const Router = require('express').Router();
const item = require('../../controllers/configurationPlan1/items');

Router.get('/', item.find);
Router.get('/:id', item.get);
Router.post('/', item.create);
Router.put('/:id', item.update);
Router.delete('/:id', item.remove);

module.exports = Router;
