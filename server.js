var express = require('express');
var app = express();
var server = app.listen(8000);
var bodyParser = require('body-parser');
app.use('/static', express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
var messages = [];

app.get('/messages', function (req, res) {
	res.json(messages);
});

app.post('/addmessage', function(req, res){
	var message = {name: req.param('name'), message: req.param('message')};
	messages.push(message);
});

app.get('/', function(req, res){
	res.sendfile('public/index.html');
});
