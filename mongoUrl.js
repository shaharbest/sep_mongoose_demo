const user = 'sep-user';
const password = 'KAa79pdGuHIXWCrx';
const host = 'shaharbakery.7kyir.mongodb.net';
const database = 'september-fs';

const mongoUrl = 
    `mongodb+srv://${user}:${password}@${host}/${database}?retryWrites=true&w=majority`;

module.exports = { mongoUrl };