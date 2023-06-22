const mongoose = require('mongoose');
const { mongoUrl } = require('./mongoUrl');
const Product = require('./shemas/Product');

function connect() {
    mongoose.connect(mongoUrl);
}

async function disconnect() {
    await mongoose.disconnect();
}

async function getAllProducts() {
    return await Product.find();
}

module.export = {
    connect,
    disconnect,
    getAllProducts
}