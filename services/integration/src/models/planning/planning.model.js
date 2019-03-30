const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PlanningSchema = new Schema({
    stakeholders: {
    type: String,
    required: [true, 'Stakeholders obligatory field']
  },
  adaptationProcesses: {
    type: String,
    required: [true, 'Adaptation in the processes obligatory field']
  },
  keyAspects: {
    type: String,
    required: [true, 'Key aspects obligatory field']
  },
  review: {
    type: String,
    required: [true, 'Review obligatory field']
  }
});

module.exports = mongoose.model('plannig', PlanningSchema);