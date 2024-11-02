const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// Routes
router.get('/', productController.getProducts);           // Get all products
router.get('/:id', productController.getProductById);     // Get product by ID
router.post('/', productController.createProduct);        // Create new product
router.put('/:id', productController.updateProduct);      // Update product by ID
router.delete('/:id', productController.deleteProduct);   // Delete product by ID

module.exports = router;
