const router = require("express").Router();
const ErrorResponse = require("../utils/error");
const Product = require("../models/Product");
const { isAuthenticated, isAdmin } = require("../middlewares/jwt");
const fileUploader = require("../config/cloudinary.config");
// @desc    GET all the products
// @route   GET /api/v1/
// @access  Public
router.get("/", async (req, res, next) => {
  try {
    const product = await Product.find({});
    if (!product) {
      next(new ErrorResponse("No products found", 404));
    }
    res.status(200).json({ data: product });
  } catch (error) {
    next(error);
  }
});
// @desc    Get single product
// @route   GET /api/v1/product/:id
// @access  Public
router.get("/:id", async (req, res, next) => {
  const { id } = req.params;
  console.log("entering Route", id);
  try {
    const product = await Product.findById(id);
    if (!product) {
      next(new ErrorResponse(`No product found by id: ${id}`, 404));
    }
    res.status(200).json({ data: product });
  } catch (error) {
    next(error);
  }
});
// @desc    Create a product
// @route   POST /api/v1/products/create
// @access  Private
router.post("/create", isAuthenticated, async (req, res, next) => {
  const { title, description, price, color, images, newStock, category } =
    req.body;
  try {
    const product = await Product.create({
      title,
      description,
      price: parseInt(price),
      color,
      images,
      newStock,
      category,
    });
    if (!product) {
      next(
        new ErrorResponse("An error ocurred while creating the product", 500)
      );
      return;
    }
    res.status(201).json({ data: product });
  } catch (error) {
    next(error);
  }
});
// @desc    Edit a product
// @route   PUT /api/v1/products/edit/:id
// @access  Private
router.put("/edit/:id", isAuthenticated, isAdmin, async (req, res, next) => {
  const { title, description, price, color, images, newStock, category } =
    req.body;
  const { id } = req.params;

  try {
    const product = await Product.findById(id);

    if (!product) {
      next(new ErrorResponse(`Product not found by id: ${id}`, 404));
    } else {
      const updatedProduct = await Product.findByIdAndUpdate(
        id,
        { title, description, price, color, images, newStock, category },
        { new: true }
      );
      res.status(202).json({ data: updatedProduct });
    }
  } catch (error) {
    next(error);
  }
});
// @desc    Delete a product
// @route   DELETE /:id
// @access  Private
router.delete("/:id", isAuthenticated, isAdmin, async (req, res, next) => {
  const { id } = req.params;
  try {
    const product = await Product.findById(id);
    if (!product) {
      next(new ErrorResponse(`Product not found by id: ${id}`, 404));
    } else {
      const deleted = await Product.findByIdAndDelete(id);
      res.status(202).json({ data: deleted });
    }
  } catch (error) {
    next(error);
  }
});
// @desc    Upload product image/s
// @route   POST /api/v1/product/upload
// @access  Private
// => Route that receives the image, sends it to Cloudinary via the fileUploader and returns the image URL
router.post(
  "/upload",
  fileUploader.single("productImageUrl"),
  (req, res, next) => {
    if (!req.file) {
      next(new ErrorResponse("Error uploading image!", 500));
      return;
    }
    // Get the URL of the uploaded file and send it as a response.
    // 'fileUrl' can be any name, just make sure you remember to use the same when accessing it on the frontend
    res.json({ fileUrl: req.file.path });
  }
);

module.exports = router;
