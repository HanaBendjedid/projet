var express = require('express');
var http = require('http');

var app = express();
app.use(express.static(__dirname+ '/app'));
//app.use(express.bodyParser())
//app.use(express.urlencoded())
//app.use(express.json())
app.use(function(req, res, next){
var a ='hello', b = ['the', 'world'];
console.log(['Say'].concat(a,b.length,b).join(' ')+ '!');
if(new String('ok')== 'ok'){
console.log('ok');
}
else {
console.log('Not OK');
}
if(new String('okok') === 'okok'){
console.log('okok');
}
else {
console.log('Not okOK');
}
console.log('Je Travail');
	console.log('%s %s', req.method, req.url);
	next(); 
})

app.post('/404', function(req, res){
res.send('404 : Page Not Found');
})
app.listen(1337);
