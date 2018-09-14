var express = require('express');
var app = express();
var PORT = process.env.PORT || 8080; // default port 8080
app.get('/', function(req, res){
  res.send('hello world');
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});