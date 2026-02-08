var request = require('request');

request.post({
    url: 'http://localhost:3000',
    json: true,
    body: {message: "Hello World"}

}, function (error, response, body) {
    if(!error && response.statusCode == 200) {
        console.log(body);
    }   
});