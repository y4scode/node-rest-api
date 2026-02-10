const users = require('../mocks/users')

module.exports = {
    index(response) {
        response.writeHead(
            200, 
            {'content-type': 'application/json; charset=utf-8'}
        );
        response.end(JSON.stringify(users));
    }
}