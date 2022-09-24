const mongoose = require("mongoose");
const { Schema } = mongoose;

const cartModel = new Schema({
  products: {
    type: [Schema.Types.ObjectId],
    ref: "Product",
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

const Cart = mongoose.model("Cart", cartModel);
module.exports = Cart;
