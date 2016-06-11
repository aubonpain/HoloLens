// This sends back the updated variable

http = require("http");

http.createServer(function (request, response) {
	
        var textToSendBack = "Hello Christina and Gal and Chris!" + new Date() + "\n Pour-over bespoke letterpress you probably haven't heard of them celiac, narwhal keffiyeh tilde migas butcher four loko drinking vinegar wayfarers. Flexitarian locavore roof party, keytar gastropub umami kitsch freegan tousled XOXO. Artisan cronut meggings selfies, keffiyeh taxidermy portland. Kogi messenger bag viral master cleanse distillery pug. Blog intelligentsia selfies, man bun twee ugh beard you probably haven't heard of them salvia bushwick health goth irony messenger bag. Next level whatever lo-fi flannel, schlitz VHS direct trade disrupt irony you probably haven't heard of them celiac. +1 ramps swag fanny pack, meditation affogato slow-carb try-hard raw denim.";


        response.writeHeader(200);  
        response.write(textToSendBack, "binary");  
        response.end();

}).listen(8080);

console.log("Server Running on 8080");
