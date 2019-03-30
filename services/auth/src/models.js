const mongoose = require('mongoose');

const TokenSchema = new mongoose.Schema({
 value: { type: String, required: true },
  userId: { type: String, required: true },
 // clientId: { type: String, required: true },
 // expireAt: { type: Date, required: true },
 // issuedAt: { type: Date, required: true }
});

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});

// Export Mongoose models
module.exports = {

  Token: mongoose.model('Token', TokenSchema),
  User: mongoose.model('User', UserSchema)
};
