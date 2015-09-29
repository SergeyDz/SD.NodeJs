var findUsers = function(db, callback, res) {
   var cursor = db.collection('users').find();
   var users = [];
   cursor.each(function(err, user) {
      assert.equal(err, null);
      if (user !== null) {
         users.push(user);
      } else {
         res.end(JSON.stringify(users) + '#');
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
