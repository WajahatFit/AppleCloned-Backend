const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const productSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Product must have a title"],
    },
    description: {
      type: String,
      required: [true, "Product must have a description"],
    },
    price: {
      type: Number,
      required: [true, "Product must have a price"],
    },
    color: {
      type: String,
      required: [true, "Product must have a color"],
    },
    newStock: {
      type: Boolean
    },
    images: {
      type: [String],
      required: [true, "Product must have at least  one Image"],
    },
    category: {
      type: String,
      enum: ["Mac", "iPhone", "iPad", "Apple Watch", "Apple TV", "Air Pods"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("Product", productSchema);
