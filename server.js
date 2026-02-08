var express = require('express');
var server = express();

// Accept raw text for any content-type so tests that send plain strings
// are captured. If the content-type is JSON, we'll attempt to parse it below.
server.use(express.text({ type: '*/*' }));
server


server.post('/', function (req, res) {
    var message = '';
    var raw = req.body;
    if (typeof raw === 'string') {
        message = raw;
    } else if (typeof raw === 'object') {
        message = JSON.stringify(raw);

    }
    console.log("Received: " + message);
    res.send(message);
});

// Export the Express app for testing. When this file is run directly,
// start the HTTP server. This prevents the app from listening when
// required by tests (which pass the app to chai-http).
module.exports = server;

if (require.main === module) {
    server.listen(3000, function () {
        console.log('Echo server listening on port 3000!');
    });
}
