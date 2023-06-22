const mongoose = require('mongoose');
const { mongoUrl } = require('./mongoUrl');
const Product = require('./schemas/Product');

function connect() {
    mongoose.connect(mongoUrl);
}

async function disconnect() {
    await mongoose.disconnect();
}

async function getAllProducts() {
    return await Product.find();
}

async function getProductById(productID) {
    return await Product.findById(productID);
}

async function insertProduct(name, price) {
    await Product.create({ name, price });
}

async function deleteProduct(productId) {
    await Product.deleteOne({ _id: productId });
}

module.exports = {
    connect,
    disconnect,
    getAllProducts,
    getProductById,
    insertProduct,
    deleteProduct
}