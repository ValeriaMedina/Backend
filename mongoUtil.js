var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://admin:admin@cluster0-bseop.mongodb.net/test?retryWrites=true&w=majority";

var _db;

module.exports = {
    createConnection: (callBack) => {
        MongoClient.connect(url, {useNewUrlParser: true, useUnifiedTopology: true}, (err, client) => {
            _db = client.db("bedu");
            return callBack(err);
        });
    },
    getDb: () => {
        return _db;
    }
}