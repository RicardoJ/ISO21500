const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AcquisitionSchema = new Schema({
    date: {
    type: Date,
    required: [true, 'Date obligatory field']
  },
  version: {
    type: String,
    required: [true, 'Version  obligatory field']
  },
  responsable: {
    type: String,
    required: [true, 'Responsable  obligatory field']
  },
  scope: {
    type: String,
    required: [true, 'Scope  obligatory field']
  },
  prescriptions: {
    type: String,
    required: [true, 'Prescriptions   obligatory field']
  },
  quantity: {
    type: String,
    required: [true, ' Quantity obligatory field'],
   
  },
  documentation: String,

  contractorDocumentation: {
    type: String,
    required: [true, 'contractor Documentation obligatory field'],
    
  },
  maxPrice: {
    type: String,
    required: [true, 'Max price obligatory field'],
    
  },
  finalTerm: {
    type: String,
    required: [true, 'Final term obligatory field'],
    
  },
  information: {
    type: String,
    required: [true, 'Information obligatory field'],
    
  },
  criteria: {
    type: String,
    required: [true, 'criteria obligatory field'],
    
  },
  otherInformation: String
  
});

module.exports = mongoose.model('acquisition', AcquisitionSchema);