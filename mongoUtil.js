var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://admin:admin@cluster0-1iddz.mongodb.net/DB-COTOS?retryWrites=true&w=majority";

var _db;

module.exports = {

    connectToServer: ( callback ) => {
      MongoClient.connect( url,  { useNewUrlParser: true }, ( err, client ) => {
        _db  = client.db('DB-COTOS');
        return callback( err );
      } );
    },
  
    getDb: () => {
      return _db;
    }
  };