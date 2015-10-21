var mongo = require('../mongo/mongo.js');

var Comment = mongo.db.model('Comment', mongo.CommentSchema);

module.exports = Comment;