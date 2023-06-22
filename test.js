const db = require('./db');
const Product = require('./schemas/Product');

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

        const result = await db.deleteProduct('649498428edcc52663b846c2');
        console.log(result);

        // const result = await Product.create({ name: 'falafel', price: 2 });
        // await resetDB();
    }
    catch (error) {
        console.error(error);
    }
    finally {
        db.disconnect();
    }
}