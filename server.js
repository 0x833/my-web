var express = require("express");
var app     = express();
var path    = require("path");

//Send static files from client
//app.use(express.static(__dirname + '/app'));
app.use(express.static(__dirname + '/fastfit'));

app.get('*',function(req,res){
  res.sendFile(__dirname + '/fastfit/index.html');
  //__dirname : It will resolve to your project folder.
});

/*
app.get('/erickmeyer',function(req,res){
  res.sendFile(__dirname + '/app/index.htm');
  //__dirname : It will resolve to your project folder.
});
*/

app.listen(8080, function(){
	console.log("Listening on port 8080");
})
