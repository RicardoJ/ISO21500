const Router = require('express').Router();
const lesson = require('../controllers/lesson');

Router.get('/', lesson.find);
Router.get('/:id', lesson.get);
Router.post('/', lesson.create);
Router.put('/:id', lesson.update);
Router.delete('/:id', lesson.remove);

module.exports = Router;
