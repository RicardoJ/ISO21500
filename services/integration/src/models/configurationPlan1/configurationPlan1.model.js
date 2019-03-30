const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ConfigurationPlan1Schema = new Schema({
    approveBy: {
    type: String,
    required: [true, 'Approve by obligatory field']
  },
  change: {
    type: String,
    required: [true, 'Change  obligatory field']
  },
  accounting: {
    type: String,
    required: [true, 'Accounting  obligatory field']
  },
  verification: {
    type: String,
    required: [true, 'Virification obligatory field']
  }
});

module.exports = mongoose.model('configurationPlan1', ConfigurationPlan1Schema);