var express = require('express');
var modules = require('./app_modules.js');
var app = express();
var PORT = process.env.PORT || 8080; // default port 8080
app.get('/', function(req, res){
  res.send('hello world');
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});

app.get("/loyal-users", (req, res) => {
 var query = req.query;
 modules.getLoyals(query).then(val => {
   res.send({count:val.length});
 })

});

app.get("/unique-users", (req, res) => {
 var query = req.query;
 modules.getUnique(query).then(val => {//uses getUnique function to extract the needed data from database
  res.send(val[0]);//sends the extracted data as response
 })
});

