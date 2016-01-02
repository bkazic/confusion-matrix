var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var port = process.env.PORT || 3000;

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.use(express.static(__dirname + '/public'));     //serve static assets

app.listen(port, function() {
    console.log('Listening on ' + port);
});

// I dodn't know what is more correct here, get or post?

app.get('/calculate', function(req, res) {
    var data = req.query
	
	console.log("Recieved GET request: " + JSON.stringify(data))
	res.status(200).json(data)
});
	
app.post('/calculate', function(req, res) {
    var data = req.body
   		
	console.log("Recieved POST request: " + JSON.stringify(data))
	res.status(200).json(data)
});