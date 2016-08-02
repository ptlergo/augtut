const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongo = require('mongodb').MongoClient;

//parse body of json
app.use(bodyParser.json());

//custom middleware CORS allowing access anywhere
app.use((req, res, next) =>{
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");

  //since custom middleware add next to not break chain
  next();

})

app.post('/api/message', (req, res) => {
  console.log(req.body);
  res.status(200);

})

mongo.connect("mongodb://localhost:27017/test", (err, db) => {
  if(!err){
    console.log("db connected!");
    //create a collection of name messages
    db.collection('messages').insertOne({'msg': 'test'});
  }
})

const server = app.listen(5000, () => {
  console.log('listening on port ', server.address().port);

})
