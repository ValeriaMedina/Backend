// Express
var express = require('express');
var app = express();
// MongoDB
var MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectId;
// Security packages
var cors = require('cors');
//// var jwt = require('jsonwebtoken');
//// var bcrypt = require('bcrypt');
//
var bodyParser = require('body-parser');
// Settings
////var saltRounds = 10;
var port = 3005;
var url = "";

const client = MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    .catch(err => { console.log(err); });
    if (!client) {
        return;
    }
const db = client.db("bedu");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/login', (req, res) => {
    let collection = db.collection("users");
    let query = {  }
    collection.findOne(query).toArray((err, result)=> {
        if (err) throw err;
          res.send(result);
    });
})

app.listen(port, ()=>{
    console.log(`Server online in Port: ${port}`)
})