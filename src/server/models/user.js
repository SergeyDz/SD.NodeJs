var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var CommonSchema   = new Schema({
    name: String
});

module.exports = mongoose.model('User', CommonSchema);