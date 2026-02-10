const http = require('node:http');
const routes = require('./routes');
const error = require('./error');

http.createServer(function (request, response) {
    const route = routes.find(function (route) {
        return request.url === route.endpoint;
    });

    if (route){
        route.handler(response);
        return;
    }

    error.notFound(response);
}).listen(3000);
