var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('My site is currently being built! :(');
});

app.listen(8080, function () {
  console.log('Example app listening on port 8000!');
});