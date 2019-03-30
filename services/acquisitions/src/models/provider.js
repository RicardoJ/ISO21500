const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProviderSchema = new Schema({
    name: {
    type: String,
    required: [true, 'Name obligatory field']
  },
  company: {
    type: String,
    required: [true, 'Company to obligatory field']
  },
  address: {
    type: String,
    required: [true, 'Address to obligatory field']
  },
  service: {
    type: String,
    required: [true, 'Service to obligatory field']
  },
  phone: {
    type: String,
    required: [true, 'Phone by to obligatory field']
  },
  email: {
    type: String,
    required: [true, 'Email by to obligatory field'],
    unique: true
  },
  identification: {
    type: String,
    required: [true, 'Identification by to obligatory field'],
    unique: true
  }
});

module.exports = mongoose.model('provider', ProviderSchema);