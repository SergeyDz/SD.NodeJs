var mongo = require('../mongo/mongo.js');

var User = mongo.db.model('User', mongo.UserSchema);

module.exports = User;