const db = require('./api/db');

var DB = db.db;

let query = (query) => {
    return new Promise((resolve, reject) => {
        DB.query(query, (err, results) => {
            if (err) reject(err);
            else resolve(results);
        })
    })
}
module.exports.query = query;


let query_action = (query, data) => {
    return new Promise(async (resolve, reject) => {
        try {
            // database.query(query, data, (err, res) => {
            //     if (err) return reject(err);
            //     resolve(res);
            // });

            DB.query(query, data, (err, res) => {
                if (err) return reject(err);
                resolve(res);
            });
        }
        catch (err) {
            reject(err);
        }
    });
}
module.exports.query_action = query_action;
