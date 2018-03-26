var nano = require('nano')(process.env.DB_PORT);
var db = nano.use(process.env.DB_NAME);

module.exports = db;