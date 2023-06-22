const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
});

const Product = mongoose.model('Products', productSchema);

module.exports = Product;