const express = require('express');
const productsController = require('../controllers/productsController');
const router = express.Router();

router.route('/')
    .get(productsController.getAllProducts)
    .post(productsController.insertProduct);

router.route('/:id')
    .get(productsController.getProductById);

module.exports = router;