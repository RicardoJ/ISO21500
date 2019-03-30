const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DeliverablesSchema = new Schema({
    
  deliverable: {
    type: String,
    required: [true, 'Deliverable obligatory field']
  },
  rules: {
    type: String,
    required: [true, 'Rules  obligatory field'],
 
  },
  responsable: {
    type: String,
    required: [true, 'Responsable  obligatory field'],
 
  }
});

module.exports = mongoose.model('deliverables', DeliverablesSchema);