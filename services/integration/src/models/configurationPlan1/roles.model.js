const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RolesSchema = new Schema({
    name: {
    type: String,
    required: [true, 'Name  obligatory field']
  },
  assignedTo: {
    type: String,
    required: [true, 'Assigned to  obligatory field']
  },
  responsibilities: {
    type: String,
    required: [true, 'Responsibilities  obligatory field']
  },
  authority: {
    type: String,
    required: [true, 'Authority obligatory field']
  }
});

module.exports = mongoose.model('roles', RolesSchema);