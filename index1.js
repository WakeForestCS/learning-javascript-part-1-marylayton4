var express = require('express');

var app = express();
var http = require('http').Server(app);

var port = process.env.PORT || 3000;

app.get('/', (req, res) => {
	res.sendFile(__dirname +'/project1.html');

})

http.listen(port, function() {
	console.log('Listening on localhost' + port);
	console.log('CONGRATS ITS WORKING!!!!!!!!!');
});