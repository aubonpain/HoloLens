// This sends back the updated variable

http = require("http");

var express = require("express");

var app = express();

var getText = "GET express world!";
var postText = "POST express world!";

app.use(addHeaders);

function addHeaders(req, res, next) {

   // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8081');
    //cwkTODO add energybee hosted url


   // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE');


   // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'cache-control,content-type');


   // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    //res.setHeader('Access-Control-Allow-Credentials', true);


   // Pass to next layer of middleware
    next();
};

app.get('/', function (request, response) {
	response.send(getText);
});

app.post('/', function (request, response) {
	var textToSet = request.body;
	response.send(textToSet);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});