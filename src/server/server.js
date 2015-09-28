var http = require('http');
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;

var url = 'mongodb://localhost:27017/test';

var findUsers = function(db, callback, res) {
   var cursor = db.collection('users').find();
   var users = [];
   cursor.each(function(err, user) {
      assert.equal(err, null);
      if (user !== null) {
         users.push(user);
      } else {
         res.end(JSON.stringify(users));
         callback();
      }
   });
};

var mongo = function(res) {
  MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  findUsers(db, function() {
      db.close();
  }, res);
});
};

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'application/json'});
  mongo(res);
}).listen(8080);


console.log('Server running on port 8080.');