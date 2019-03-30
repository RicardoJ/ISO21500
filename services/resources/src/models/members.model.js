const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MembersSchema = new Schema({
    
  type: {
    type: String,
    required: [true, 'Type obligatory field']
  },
  name: {
    type: String,
    required: [true, 'name  obligatory field'],
 
  },
  lastName: {
    type: String,
    required: [true, 'Last name  obligatory field'],
 
  },
  rol: {
    type: String,
    required: [true, 'Rol  obligatory field'],
 
  },
  departament: {
    type: String,
    required: [true, 'Departament  obligatory field'],
 
  },
  workplace: {
    type: String,
    required: [true, 'Workplace  obligatory field'],
 
  },
  schedule: {
    type: String,
    required: [true, 'Schedule  obligatory field'],
 
  },
  phone: {
    type: String, 
    required: [true, 'Phone  obligatory field'],
 
  },
  email: {
    type: String,
    required: [true, 'Email  obligatory field'],
    unique : true
 
  }
});

module.exports = mongoose.model('members', MembersSchema);