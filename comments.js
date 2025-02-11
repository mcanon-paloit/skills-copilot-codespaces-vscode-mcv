// Create web server
// Create a web server that listens on port 8080 and serves the comments.json file.

// The server should respond to a GET request to /comments with the contents of the comments.json file.

// The comments.json file contains a JSON-encoded array of objects.

// You can read the file like this:

// var fs = require('fs');
// var comments = JSON.parse(fs.readFileSync('comments.json', 'utf8'));

var http = require('http');
var fs = require('fs');

http.createServer(function(req, res) {
  if (req.method === 'GET' && req.url === '/comments') {
    fs.readFile('comments.json', function(err, data) {
      if (err) {
        res.writeHead(500);
        res.end('Internal server error');
      } else {
        res.writeHead(200);
        res.end(data);
      }
    });
  } else {
    res.writeHead(404);
    res.end('Not found');
  }
}).listen(8080); 

//web server that listens on port 3000 and serves the comments.html file. Use the comments.html file from the previous exercise.
