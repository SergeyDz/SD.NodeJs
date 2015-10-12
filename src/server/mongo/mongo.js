var mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');

mongoose.connect('mongodb://localhost:27017/test');

var Schema = mongoose.Schema;

var UserSchema = new Schema({
    name: String
});
UserSchema.plugin(timestamps);

var CommentSchema = new Schema({
    Comment: String, 
    Author: String
});
CommentSchema.plugin(timestamps);

module.exports = {
    UserSchema: UserSchema,
    CommentSchema: CommentSchema,
    db: mongoose
};



