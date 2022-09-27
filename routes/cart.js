const router = require("express").Router();
const ErrorResponse = require("../utils/error");
const { isAuthenticated, isAdmin } = require("../middlewares/jwt");
const Cart = require("../models/Cart");
// @desc    GET cart
// @route   GET /api/v1/
// @access  Public
router.get("/", isAuthenticated, async (req, res, next) => {
  const { _id } = req.payload;
  try {
    const cart = await Cart.find({ user: _id }).populate("products");
    if (cart.length < 1) {
      next(new ErrorResponse("No cart found", 404));
    } else {
      res.status(200).json({ data: cart });
    }
  } catch (error) {
    next(error);
  }
});

// @desc    Check if cart exists already
// @route   POST /api/v1/product/checkcart
// @access  Private
// => Route that checks if there's cart: if not, creates one with product, if there's one, it updates it with product
router.post("/checkcart", isAuthenticated, async (req, res, next) => {
  const { productId } = req.body;
  const { _id } = req.payload;
  try {
    const cartInDB = await Cart.find({ user: _id });
    console.log(cartInDB);
    if (cartInDB.length < 1) {
      const cartFromDB = await Cart.create({
        products: [productId],
        user: _id,
      });
      res.status(200).json({ data: cartFromDB });
    } else {
      const updatedCart = await Cart.findOneAndUpdate(
        { user: _id },
        { $push: { products: productId } },
        { new: true }
      );
      res.status(200).json({ data: updatedCart });
    }
  } catch (e) {
    next(e);
  }
});

router.put("/delete/:productId", isAuthenticated, async (req, res, next) => {
  const { productId } = req.params;
  const { _id } = req.payload;
  try {
    const prevCart = await Cart.findOne({ user: _id });
    prevCart.products.pull({ _id: productId });
    await prevCart.save();
    const newCart = await Cart.findOne({ user: _id }).populate("products");
    console.log("new", newCart);
    res.status(200).json({ data: newCart });
  } catch (e) {
    console.log(e);
    next(e);
  }
});

module.exports = router;
