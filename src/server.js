const express = require('express');
const app = express();
const bodyParser = require('body-parser');

//parse body of json
app.use(bodyParser.json());

//custom middleware CORS
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

const server = app.listen(5000, () => {
  console.log('listening on port ', server.address().port);

})
