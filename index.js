var express = require('express');
var app = express();
var server = app.listen(8000);
var messages = [];

app.get('/messages', function (req, res) {
	res.json(messages);
});

