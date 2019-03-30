const Router = require('express').Router();
const configurationDocuments = require('../../controllers/configurationPlan2/configurationDocuments');

Router.get('/', configurationDocuments.find);
Router.get('/:id', configurationDocuments.get);
Router.post('/', configurationDocuments.create);
Router.put('/:id', configurationDocuments.update);
Router.delete('/:id', configurationDocuments.remove);

module.exports = Router;
