const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OtherRequirementsSchema = new Schema({
    name: {
    type: String,
    required: [true, 'Name obligatory field']
  },
  department: {
    type: String,
    required: [true, 'Department obligatory field']
  }
});

module.exports = mongoose.model('otherRequirements', OtherRequirementsSchema);