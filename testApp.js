// This sends back the updated variable

http = require("http");

var express = require("express");

var app = express();

var translatedText = "hello express world!";

app.get('/', function (request, response) {
	response.send(translatedText);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});