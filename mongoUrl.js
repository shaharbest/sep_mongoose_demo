require('dotenv').config();

const {
    MONGO_USER: user,
    MONGO_PASSWORD: password,
    MONGO_HOST: host,
    MONGO_DB: database
} = process.env;

const mongoUrl = 
    `mongodb+srv://${user}:${password}@${host}/${database}?retryWrites=true&w=majority`;

module.exports = { mongoUrl };