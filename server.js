var express = require('express');
var app = express();
var server = app.listen(8000);
app.use('/static', express.static('public'));
var messages = [];

app.get('/messages', function (req, res) {
	res.json(messages);
});

app.get('/', function(req, res){
	res.sendfile('public/index.html');
})