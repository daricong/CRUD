const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'mysql',
    database: 'CRUD'
});

db.connect((err) => {
    if (err) throw err;
    else console.log('DATABASE CONNECTED');
})

module.exports.db = db;
