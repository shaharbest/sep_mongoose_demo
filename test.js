const db = require('./db');
const Product = require('./shemas/Product');

main();

async function resetDB() {
    await Product.deleteMany();
    console.log('all products were deleted');

    const sampleProducts = require('./sample.json');
    await Product.insertMany(sampleProducts);
    console.log('sample products were inserted');
}

async function main() {
    try {
        await db.connect();
        await resetDB();
    }
    catch (error) {
        console.error(error);
    }
    finally {
        db.disconnect();
    }
}