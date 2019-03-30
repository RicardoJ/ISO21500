const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AuthorityLevelSchema = new Schema({
    maxDeviation: {
    type: String,
    required: [true, 'Max deviation obligatory field']
  },
  threshold: {
    type: String,
    required: [true, 'Threshold to obligatory field']
  },
  decision: {
    type: String,
    required: [true, 'Decision to obligatory field']
  },
  recruitment: {
    type: String,
    required: [true, 'Recruitment to obligatory field']
  },
  decisionBy: {
    type: String,
    required: [true, 'Decision by to obligatory field']
  }
});

module.exports = mongoose.model('authorityLevel', AuthorityLevelSchema);