const express = require('express');
const { body } = require('express-validator');
const { getItems, createItem, updateItem, deleteItem } = require('../controllers/itemController');
const auth = require('../middleware/auth');

const router = express.Router();

// Validation rules
const itemValidation = [
  body('title')
    .trim()
    .isLength({ min: 1, max: 100 })
    .withMessage('Title must be between 1 and 100 characters'),
  body('description')
    .trim()
    .isLength({ min: 1, max: 500 })
    .withMessage('Description must be between 1 and 500 characters')
];

// All routes are protected
router.use(auth);

// @route   GET /api/items
// @desc    Get all items for logged in user
// @access  Private
router.get('/', getItems);

// @route   POST /api/items
// @desc    Create new item
// @access  Private
router.post('/', itemValidation, createItem);

// @route   PUT /api/items/:id
// @desc    Update item
// @access  Private
router.put('/:id', itemValidation, updateItem);

// @route   DELETE /api/items/:id
// @desc    Delete item
// @access  Private
router.delete('/:id', deleteItem);

module.exports = router;
