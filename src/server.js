const express = require('express');
const app = express();

app.post('/api/message', (req, res){
  console.log(req.body);
  res.status(200);

});

const server = app.listen(5000, (){
  console.log('listening on port: 5000', server.address().port);

});
