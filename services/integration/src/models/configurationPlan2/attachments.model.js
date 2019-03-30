const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AttachmentSchema = new Schema({
    
  document: {
    type: String,
    required: [true, 'Document obligatory field']
  },
  description: {
    type: String,
    required: [true, 'Description  obligatory field'],
 
  }
});

module.exports = mongoose.model('Attachment', AttachmentSchema);