const express = require('express');
const { body } = require('express-validator');
const { getItems, createItem, updateItem, deleteItem } = require('../controllers/itemController');
const auth = require('../middleware/auth');

const router = express.Router();

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

router.use(auth);

router.get('/', getItems);

router.post('/', itemValidation, createItem);

router.put('/:id', itemValidation, updateItem);

router.delete('/:id', deleteItem);

module.exports = router;
