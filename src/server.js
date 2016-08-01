const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser)
app.post('/api/message', (req, res) => {
  console.log(req.body);
  res.status(200);

});

const server = app.listen(5000, () => {
  console.log('listening on port ', server.address().port);

});
