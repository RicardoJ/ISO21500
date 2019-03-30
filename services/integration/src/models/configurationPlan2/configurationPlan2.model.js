const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ConfigurationPlan2Schema = new Schema({
    
  approveBy: {
    type: String,
    required: [true, 'Approve By obligatory field']
  },
  objectives: {
    type: String,
    required: [true, 'Objectives  obligatory field'],
 
  },
  system: {
    type: String,
    required: [true, 'System  obligatory field'],
 
  },
  idDocument: {
    type: String,
    required: [true, 'Id obligatory field'],

  },
  date: {
    type: Date,
    required: [true, 'Date obligatory field']
  },
  comunication: {
    type: String,
    required: [true, 'Comunication obligatory field']
  },
  approval: {
    type: String,
    required: [true, 'Approval obligatory field']
  },
  audit: {
    type: String,
    required: [true, 'Audit obligatory field']
  }
});

module.exports = mongoose.model('configuration2', ConfigurationPlan2Schema);