// Express
var express = require('express');
var app = express();
// MongoDB
var mongoUtil = require('./mongoUtil');
// Security packages
var cors = require('cors');
// Settings
var bodyParser = require('body-parser');
var port = 3005;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/login', (req, res) => {
    mongoUtil.connectToServer((err) => {
        if (err) throw err;
        let Collection = mongoUtil.getDb().collection('users');
        let query = { mail: req.body.email, password: req.body.pass };
        Collection.findOne(query, (err, result) => {
            if (err) throw err;
            console.log(result);
            res.send(result);
        });
    });
});

app.listen(port, ()=>{
    console.log(`Server online in Port: ${port}`)
})