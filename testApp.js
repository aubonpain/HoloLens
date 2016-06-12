// This sends back the updated variable

http = require("http");

var express = require("express");
var bodyParser = require("body-parser");

var app = express();

var translatedText = "";

app.use(bodyParser.json());
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
	console.log("got req sending text back: " + translatedText);
	response.send(translatedText);
});

app.post('/', function (request, response) {
	//debugger;
	translatedText = request.body.text;
	//console.log("translatedText: " + translatedText);
	response.send(translatedText);
});

var portnum = 8080; //3000;
app.listen(portnum, function () {
  console.log('Example app listening on port ' + portnum);
});