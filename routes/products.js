const express = require('express');
const router = express.Router();
const productsController = require('../controllers/products');

router.get('/', productsController.getAllProducts)
router.get('/byCategory/:categoryId', productsController.getProductsByCategory)
router.post('/setUnsetCategory', productsController.setUnSetCategory)
module.exports = router;
