var express = require('express');
var router = require('./routes/route.js');
var bodyParser = require('body-parser');


var url = 'mongodb://localhost:27017/test';
var port = process.env.PORT || 8080;        // set our port

var app = express();                 // define our app using express

app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);