// Express
var express = require('express');
var app = express();
// MongoDB
var ObjectId = require('mongodb').ObjectId;
var mongoUtil = require( 'mongoUtil' );
var db = mongoUtil.getDb();
// Security packages
var cors = require('cors');
// Settings
var bodyParser = require('body-parser');
var port = 3005;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/login', (req, res) => {
    mongoUtil.createConnection((err, client) => {
        if (err) console.log(err);
        db.collection("users").findOne({});
    });
});

app.listen(port, ()=>{
    console.log(`Server online in Port: ${port}`)
})