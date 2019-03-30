const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const HitoSchema = new Schema({
    deliverable: {
    type: String,
    required: [true, 'Deliverable obligatory field']
  },
  hito: {
    type: String,
    required: [true, 'Hito obligatory field']
  },
  date: {
    type: Date,
    required: [true, 'Date obligatory field']
  }
});

module.exports = mongoose.model('hito', HitoSchema);