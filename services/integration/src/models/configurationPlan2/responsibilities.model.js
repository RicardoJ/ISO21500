const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ResponsabilitiesSchema = new Schema({
    
  rol: {
    type: String,
    required: [true, 'Rol obligatory field']
  },
  responsabilities: {
    type: String,
    required: [true, 'Responsabilities  obligatory field'],
 
  }
});

module.exports = mongoose.model('responsabilities', ResponsabilitiesSchema);