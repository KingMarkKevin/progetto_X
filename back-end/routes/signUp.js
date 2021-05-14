var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

/*var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'learnandtravelcostomerservice@gmail.com',
    pass: ''
  }
});*/

const MongoClient = require('mongodb').MongoClient;

const uri = 'mongodb+srv://kevin-king:cinanumerouno@cluster0.zuvcs.mongodb.net/watcher_project?retryWrites=true&w=majority'

router.get("/:nome/:cognome/:mail/:pass", function (req, res){
    nome = req.params.nome;
    cognome = req.params.cognome;
    email = req.params.mail;
    psw = req.params.pass;
    MongoClient.connect(uri, function(err, db) {
        if (err) throw err;
        var dbo = db.db("watcher_project");
        dbo.collection("users").find({"email":email}).toArray(function(err, results) {
            if (err) throw err;
            this.result = results;
          if (result.length === 0)
          {
            var myobj = {"nome" : nome, "cognome" : cognome, "email": email, "password": psw};
            dbo.collection("users").insertOne(myobj, function(err, res) {
            if (err) throw err;
            this.result = results;
            result = "User added";
            });
            var reg = {"SingUp" : false}
            result = reg;
            res.send(result);
          }else
          {
            var reg = {"SingUp" : true}
            result = reg;
            res.send(result);
          }

          /*var mailOptions = {
            from: 'learnandtravelcostomerservice@gmail.com',
            to: email,
            subject: 'Registrazione a Learn&Traver',
            html: `<h1> Learn&Travel</h1> <p>Gentile cliente ${nome} ${cognome},</p> <p>la informiamo che la sua registrazione è stata effetuata con successo.</p> <p>Da questo momento è possibile accedere al sito https://4200-orange-lobster-h7jzyqjw.ws-eu03.gitpod.io/login</p>`
            };

            transporter.sendMail(mailOptions, function(error, info){
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
            }
            });*/

        db.close();
        });
    });
});

module.exports = router;