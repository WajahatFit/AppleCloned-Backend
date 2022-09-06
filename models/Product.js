const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const userSchema = new Schema({
    title: {
      type: String,
      unique: true,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    color: {
      type: String,
      required: true
    },
    newStock: {
        type: bool,
        required: true
    }
  },
    {
      timestamps: true
    });
  
  module.exports = model("User", userSchema);