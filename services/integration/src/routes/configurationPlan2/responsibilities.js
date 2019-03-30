const Router = require('express').Router();
const responsibilities = require('../../controllers/configurationPlan2/responsibilities');

Router.get('/', responsibilities.find);
Router.get('/:id', responsibilities.get);
Router.post('/', responsibilities.create);
Router.put('/:id', responsibilities.update);
Router.delete('/:id', responsibilities.remove);

module.exports = Router;
