const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LimitationsSchema = new Schema({
    limitation: {
    type: String,
    required: [true, 'Limitation obligatory field']
  },
  affectTo: {
    type: String,
    required: [true, 'Affect to obligatory field']
  },
  valuation: {
    type: String,
    required: [true, 'Valuation to obligatory field']
  },
  risk: {
    type: String,
    required: [true, 'Risk to obligatory field']
  },
  probability: {
    type: String,
    required: [true, 'Probability to obligatory field']
  },
  impactOn: {
    type: String,
    required: [true, 'Impact on to obligatory field']
  },
  valuationRisk: {
    type: String,
    required: [true, 'Valuation of risk to obligatory field']
  }
});

module.exports = mongoose.model('limitation', LimitationsSchema);