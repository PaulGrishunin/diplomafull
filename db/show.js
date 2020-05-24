const mongodb = require('mongodb');

const MongoClient = mongodb.MongoClient;
const url = 'mongodb://paul_gri:qwerty12345@ds135534.mlab.com:35534/heroku_r8z2mgc1';

const show = () =>
    new Promise((resolve, reject) => {
        MongoClient.connect(url, (err, db) => {
            if (err) {
                return reject(err);
            }
            const questions = db.collection('questions');
            const users = db.collection('users');

            console.log('Show Quesctions:');
            questions.find().toArray(function (err, docs) {
                console.log(docs);
            });

            console.log('Show Users:');
            users.find().toArray(function (err, docs) {
                console.log(docs);
            });
        });

        return resolve(db);
    });

show();