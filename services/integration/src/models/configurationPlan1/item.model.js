const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
    
  name: {
    type: String,
    required: [true, 'Name obligatory field']
  },
  category: {
    type: String,
    required: [true, 'Category  obligatory field'],
    enum: ['1', '2','3','4']
  },
  source: {
    type: String,
    required: [true, 'Source obligatory field'],
    enum: ['P','C','V','E']
  },
  format: {
    type: String,
    required: [true, 'Format obligatory field']
  }
});

module.exports = mongoose.model('item', ItemSchema);