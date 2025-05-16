const express = require('express');
const router = express.Router();
const ItemsController = require('../controllers/itemsController');
const itemsController = new ItemsController();

// GET all items
router.get('/', itemsController.getAllItems.bind(itemsController));

// GET item by ID
router.get('/:id', itemsController.getItemById.bind(itemsController));

// POST create a new item
router.post('/', itemsController.createItem.bind(itemsController));

// PUT update an item by ID
router.put('/:id', itemsController.updateItem.bind(itemsController));

// DELETE an item by ID
router.delete('/:id', itemsController.deleteItem.bind(itemsController));

module.exports = router;