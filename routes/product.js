const router = require('express').Router();
const ErrorResponse = require('../utils/error');
const Product = require('../models/Product');


// @desc    GET all the products
// @route   GET /api/v1/
// @access  Public
router.get('/', async (req, res, next) => {
  try {
    const product = await Product.find({});
    if (!product) {
      next(new ErrorResponse('No products found', 404));
    }
    res.status(200).json({ data: product })
  } catch (error) {
    next(error);
  }
});

// @desc    Get single product
// @route   GET /api/v1/product/:id
// @access  Public

router.get('/:id', async (req, res, next) => {
  const {id} = req.params;
  try {
    const product = await Product.findById(id);
    if (!product) {
      next(new ErrorResponse(`No product found by id: ${id}`, 404));
    }
    res.status(200).json({ data: product })
  } catch (error) {
    next(error);
  }
});

// @desc    Create a product
// @route   POST /api/v1/create
// @access  Private

// add auth here idk

router.post('/create', async (req, res, next) => {
  const { title, description, price, color, newStock } = req.body;
  try {
    const product = Product.create({title, description, price: parseInt(price), color, newStock});
    if (!product) {
      next(new ErrorResponse('An error ocurred while creating the product', 500));
    }
    res.status(201).json({ data: product })
  } catch (error) {
      next(error);
  }
});

// @desc    Edit a product
// @route   PUT /api/v1/edit/:id
// @access  Public

route.put('/edit', (req, res, next) =>{
  const { title, description, price, color, newStock } = req.body;
  const {id} = req.params;
  try {
    const product = Product.findById(id);

  } catch (error) {
    next(error)
  }
})







module.exports = router;
