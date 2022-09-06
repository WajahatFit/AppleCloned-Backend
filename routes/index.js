const router = require('express').Router();
const ErrorResponse = require('../utils/error');

// @desc    GET all the products
// @route   GET /api/v1/
// @access  Public
router.get('/', async (req, res, next) => {
  try {
    const projects = await Project.find({});
    if (!projects) {
      next(new ErrorResponse('No projects found', 404));
    }
    res.status(200).json({ data: projects })
  } catch (error) {
    next(error);
  }
});


// @desc    GET all the projects
// @route   GET /api/v1/
// @access  Public
router.get('/', async (req, res, next) => {
  res.send('REST API')
});


module.exports = router;