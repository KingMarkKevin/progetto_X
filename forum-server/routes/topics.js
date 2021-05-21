var express = require('express');
var router = express.Router();
const MongoClient = require('mongodb').MongoClient;

const uri = 'mongodb+srv://kevin-king:cinanumerouno@cluster0.zuvcs.mongodb.net/watcher_project?retryWrites=true&w=majority'


/* GET users listing. */
router.get('/topic/all', function(req, res, next) {
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    client.connect(foundUser);
        
        function foundUser(err){
            if (err) console.log("connesione al db non riuscita");
            else{
                const collection = client.db("watcher_project").collection("forum");
                collection.find({}).toArray(callBackQuery);
            }

        }  
        function callBackQuery(err, result){
            if (err) console.log(err.message);
            else res.send(result);
            client.close();
        }
});

/*
router.get('/topic/:tpc', function(req, res, next) {
  tpc = req.params.tpc;
  console.log(tpc);
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    client.connect(foundUser);
        
        function foundUser(err){
            if (err) console.log("connesione al db non riuscita");
            else{
                const collection = client.db("watcher_project").collection("forum");
                collection.find({'topic': tpc}).toArray(callBackQuery);
            }

        }  
        function callBackQuery(err, result){
            if (err) console.log(err.message);
            else result;
            client.close();
        }
});
*/


module.exports = router;
