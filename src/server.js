const http = require('node:http');

http.createServer(function () {
    console.log('The server was called.');
}).listen(3000);
