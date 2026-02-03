const http = require('node:http');

http.createServer(function (request, response) {
    response.writeHead(200, {'content-type': 'application/json; charset=utf-8'});
    response.end(JSON.stringify({message: 'Hello Client!'}));
}).listen(3000);
