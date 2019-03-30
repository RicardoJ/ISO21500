const Router = require('express').Router();
const attachments = require('../../controllers/configurationPlan2/attachments');

Router.get('/', attachments.find);
Router.get('/:id', attachments.get);
Router.post('/', attachments.create);
Router.put('/:id', attachments.update);
Router.delete('/:id', attachments.remove);

module.exports = Router;
