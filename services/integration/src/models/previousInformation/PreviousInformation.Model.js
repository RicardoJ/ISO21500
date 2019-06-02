const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const previousInformationSchema = new Schema({
  description: {
    type: String,
    required: [true, ' Description is obligatory field']
  },
  vision: {
    type: String,
    required: [true, 'Vision obligatory field']
  },
  viability: {
    type: String,
    required: [true, 'Viability obligatory field']
  },
  requirements: {
    type: String,
    required: [true, 'Requirements obligatory field']
  },
  client: {
    type: String,
    required: [true, 'Client obligatory field']
  }
});

module.exports = mongoose.model(
  'previousInformation',
  previousInformationSchema
);
