var express = require('express');
var http = require('http');

var app = express();
app.use(express.static(__dirname+ '/app'));
//app.use(express.bodyParser())
app.use(express.urlencoded())
app.use(express.json())
app.use(function(req, res, next){
console.log('Je Travail');
	console.log('%s %s', req.method, req.url);
	next(); 
})

app.post('/404', function(req, res){
res.send('404 : Page Not Found');
})
app.listen(1337);
