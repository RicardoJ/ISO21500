const Router = require('./node_modules/express').Router();
const previousInformation = require('../../controllers/previousInformation/previousInformation');

Router.post('/', previousInformation.create);
Router.get('/', previousInformation.find);
Router.patch('/:id', previousInformation.update);


module.exports = Router;