const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LessonSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Name obligatory field']
  },
  id: {
    type: String,
    required: [true, 'Id obligatory field']
  },
  objective: {
    type: String,
    required: [true, 'Objective obligatory field']
  },
  description: {
    type: String,
    required: [true, 'Description obligatory field']
  },
  report: {
    type: String,
    required: [true, 'Report obligatory field']
  }
});

module.exports = mongoose.model('lesson', LessonSchema);