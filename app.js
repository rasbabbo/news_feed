var express = require('express'),
	bodyParser = require('body-parser'),
	app = express();

var article = [];

app.get('/', function(req, res){
  res.send('hello world');
});

app.listen(3000);