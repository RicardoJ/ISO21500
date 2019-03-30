const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DocumentationPlanSchema = new Schema({
    documents: {
    type: String,
    required: [true, 'Documents  obligatory field']
  },
  format: {
    type: String,
    required: [true, 'Format to  obligatory field']
  },
  access: {
    type: String,
    required: [true, 'Access  obligatory field']
  },
  availability: {
    type: String,
    required: [true, 'Availability obligatory field']
  },
  security: {
    type: String,
    required: [true, 'Security obligatory field']
  },
  recovery: {
    type: String,
    required: [true, 'Recovery obligatory field']
  },
  retention: {
    type: String,
    required: [true, 'Retention obligatory field']
  }
});

module.exports = mongoose.model('documentationPlan', DocumentationPlanSchema);