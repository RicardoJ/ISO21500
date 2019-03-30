const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TeamsSchema = new Schema({
    
  rol: {
    type: String,
    required: [true, 'Rol obligatory field']
  },
  description: {
    type: String,
    required: [true, 'Description  obligatory field'],
 
  },
  ambit: {
    type: String,
    required: [true, 'Ambit  obligatory field'],
 
  },
  competency: {
    type: String,
    required: [true, 'Competency  obligatory field'],
 
  }
});

module.exports = mongoose.model('teams', TeamsSchema);