var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'watcherprojectcustomerservice@gmail.com',
    pass: 'cinanumerouno'
  }
});

const MongoClient = require('mongodb').MongoClient;

const uri = 'mongodb+srv://kevin-king:cinanumerouno@cluster0.zuvcs.mongodb.net/watcher_project?retryWrites=true&w=majority'


router.get("/:email/:cod/:password", function (req, res){
    email = req.params.email;
    codice = req.params.cod;
    pass = req.params.password;
    MongoClient.connect(uri, function(err, db) {
        if (err) throw err;
        var dbo = db.db("watcher_project");
        dbo.collection("changePass").find({$and:[{"email":email}, {"codiceSicurezza": codice}]}).toArray(function(err, results) {
            if (err) throw err;
            this.result = results;
           
        if (result.length != 0){ 
            var query = {'email': email};
            var newvalues = {$set: {"password": pass}};
            dbo.collection("users").updateOne(query, newvalues, function(err, res) {
            if (err) throw err;
            r = "password modificata con successo";
            console.log(r)
            });

            var reg = {info : true}
            res.send(reg);
            } 
            else{
                var reg = {info: false}
                res.send(reg)
            }

            var myquery = {$and:[{"email":email}, {"codiceSicurezza": codice}]};
            dbo.collection("changePass").deleteOne(myquery, function(err, obj) {
            if (err) throw err;
            console.log("1 document deleted");

            db.close();
            });
        });
    });
});

module.exports = router;