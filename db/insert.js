const mongodb = require('mongodb');

const questionsJson = require('./questions');
const usersJson = require('./users');

const MongoClient = mongodb.MongoClient;
const url = 'mongodb://paul_gri:qwerty12345@ds135534.mlab.com:35534/heroku_r8z2mgc1';

//module.exports.insert = () =>
const insert = () =>
    new Promise((resolve, reject) => {
        MongoClient.connect(url, (err, db) => {
            if (err) {
                return reject(err);
            }
            const questions = db.collection('questions');
            const users = db.collection('users');

            questions.remove();
            users.remove();

            questions.insert(questionsJson, (err, result) => {
                if (err) return err;
                console.log(result);
            });
            users.insert(usersJson, (err, result) => {
                if (err) return err;
                console.log(result);
            });
        });

        return resolve(db);
        });

insert();