
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'application/json'});
  mongo(res);
}).listen(8080);


console.log('Server running on port 8080.');