const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DocumentSchema = new Schema({
    document: {
    type: String,
    required: [true, 'Document obligatory field']
  },
  description: {
    type: String,
    required: [true, 'Description in the processes obligatory field']
  }
});

module.exports = mongoose.model('documents', DocumentSchema);