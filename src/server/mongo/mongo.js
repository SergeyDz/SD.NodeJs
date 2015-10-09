var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/test');

var Schema = mongoose.Schema;
var UserSchema = new Schema({
    name: String
});
var CommentSchema = new Schema({
    Comment: String, 
    Author: String
});

module.exports = {
    UserSchema: UserSchema,
    CommentSchema: CommentSchema,
    db: mongoose
};



