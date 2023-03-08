const http = require('node:http');
const mime = require("mime");
mime.getType("txt");
mime.getExtension("text/plain");

// Create a local server to receive data from
const server = http.createServer();

// Listen to the request event
server.on('request', (request, res) => {
  console.log(request.method);
  console.log(request.url);
  console.log(request.headers);

  
  let mimeType = mime.getType("html");
  res.writeHead(200, { 'Content-Type': mimeType });
  res.end("<html><head><title>first tag</title></head><body><h1>Hello</h1></body></html>")
});

server.listen(8000);

console.log("server started on port 8000. Press Control+C to terminate")