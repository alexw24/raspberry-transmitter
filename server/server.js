var http = require('http');

var server = http.createSever(function(req, res){
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.end("Hello World\n");
});

server.listen(8000);

console.log("/"); 