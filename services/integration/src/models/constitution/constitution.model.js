const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const constitutionSchema = new Schema({
  sponsor: {
    type: String,
    required: [true, 'Sponsor obligatory field']
  },
  customer: String,

  assignment: Boolean,

  contract: Boolean,

  businessCase: Boolean,

  utterance: Boolean,

  strategicView: {
    type: String,
    required: [true, 'StrategicView obligatory field']
  },
  description: {
    type: String,
    required: [true, 'DescriptionObligatory field']
  },
  viabilityAnalysis: {
    type: String,
    required: [true, 'ViabilityAnalysis obligatory field']
  },
  generalRequirements: {
    type: String,
    required: [true, 'GeneralRequirements obligatory field']
  },
  departmentsInvolved: String,

  criticalFactors: String,

  additionalRemarks: {
    type: String,
    required: [true, 'AdditionalRemarks obligatory field']
  },
  justification: {
    type: String,
    required: [true, 'Justification obligatory field']
  }
});

module.exports = mongoose.model('constitution', constitutionSchema);
