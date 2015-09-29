var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/test');

var Schema = mongoose.Schema;
var CommonSchema = new Schema({
    name: String
});

module.exports = {
    schema: CommonSchema,
    db: mongoose
};



