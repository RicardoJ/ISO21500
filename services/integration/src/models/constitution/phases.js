const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PhasesSchema = new Schema({
  phase: {
    type: String,
    required: [true, 'Phase obligatory field']
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

module.exports = mongoose.model('phases', PhasesSchema);