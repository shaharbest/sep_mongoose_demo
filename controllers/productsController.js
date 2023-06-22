const db = require("../db");

async function getAllProducts(req, res) {
    const allProducts = await db.getAllProducts();
    res.json(allProducts);
}

async function getProductById(req, res) {
    const product = await db.getProductById(req.params.id)
    res.json(product);
}

async function insertProduct(req, res) {
    const name = req.body.name;
    const price = Number(req.body.price);

    await db.insertProduct(name, price)
    res.sendStatus(201);
}

module.exports = {
    getAllProducts,
    getProductById,
    insertProduct
};