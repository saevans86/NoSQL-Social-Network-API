const { connect, connection } = require('mongoose');

//connects to mongo db and creates new database called social_db
connect('mongodb://127.0.0.1:27017/social_db');

module.exports = connection;
