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

var codiceSicurezza;

router.get("/:email/:cod", function (req, res){
    email = req.params.email;
    codiceSicurezza = req.params.cod;
    MongoClient.connect(uri, function(err, db) {
        if (err) throw err;
        var dbo = db.db("watcher_project");
        dbo.collection("users").find({"email":email}).toArray(function(err, results) {
            if (err) throw err;
            this.result = results;
           
          if (result.length != 0)
          {
            var myobj = {'email': email, 'codiceSicurezza': codiceSicurezza};
            dbo.collection("changePass").insertOne(myobj, function(err, res) {
            if (err) throw err;
            r = "codice sicurezza aggiunto";
            console.log(r)
            });

            var reg = {"info" : true}
            res.send(reg);
            var mailOptions = {
            from: 'watcherprojectcustomerservice@gmail.com',
            to: `${email}`,
            subject: 'Richiesta di recupero password',
            html: `<h1> Watcher Project </h1> <p>Gentile cliente ${results[0].nome} ${results[0].cognome},</p><p> il suo codice di sicurezza è: <b>${codiceSicurezza}</b></p>`
            };

            transporter.sendMail(mailOptions, function(error, info){
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
            }
            });
          } 
          else{
              var reg = {"info": false}
              res.send(reg)
          }
        db.close();
        });
    });
});

module.exports = router;