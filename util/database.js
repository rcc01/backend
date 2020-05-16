const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

let _db;


// mongodb+srv://admin:<password>@cluster0-mdub4.mongodb.net/test?retryWrites=true&w=majority

const mongoConnect = callback => {
    MongoClient.connect('mongodb+srv://admin:admin@cluster0-mdub4.mongodb.net/Cluster0?retryWrites=true&w=majority')
    .then(client => {
        console.log('Connected');
        _db = client.db();
        callback();
    })
    .catch(err => {
        console.log('Error');
        throw err;
    });
};

const getDB = () => {
    if(_db) {
        return _db;
    }
    throw 'No db'
}

exports.mongoConnect = mongoConnect;
exports.getDB = getDB;
