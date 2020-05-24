const mongodb = require('mongodb');

const MongoClient = mongodb.MongoClient;
const url = 'mongodb://paul_gri:qwerty12345@ds135534.mlab.com:35534/heroku_r8z2mgc1';

module.exports.connect = () =>
    new Promise((resolve, reject) => {
        MongoClient.connect(url, (err, db) => {
            if (err) {
                return reject(err);
            }

            return resolve(db);
        });
    });
