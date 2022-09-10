const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const userSchema = new Schema({
  email: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  hashedPassword: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true,
    trim: true
  },
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user'
  },
  image: {
    type: String
  }
},
  {
    timestamps: true
  });

module.exports = model("User", userSchema);