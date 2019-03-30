const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LifeCycleSchema = new Schema({
    phases: {
    type: String,
    required: [true, 'Phases obligatory field']
  },
  processes: {
    type: String,
    required: [true, 'Processes  obligatory field']
  },
  input: {
    type: String,
    required: [true, 'Input  obligatory field']
  },
  output: {
    type: String,
    required: [true, 'Output obligatory field']
  },
  interaction: {
    type: String,
    required: [true, 'Interaction obligatory field']
  },
  status: {
    type: String,
    required: [true, 'Action obligatory field'],
    enum: ['Abierto', 'Cerrado']
  }
});

module.exports = mongoose.model('lifecCycle', LifeCycleSchema);