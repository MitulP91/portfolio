// load the used packages
var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var app = express();
var http = require('http').Server(app);
var morgan  = require('morgan');

// set mongoose to global namespace
global.mongoose  = require('mongoose');

// connect to database
global.db = mongoose.connect('mongodb://localhost/portfolio');

// config
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride());
app.use(morgan('dev')); // log every request to the console
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs'); // set up ejs for templating

// routes
require('./app/routes.js')(app); // load our routes and pass in our app and fully configured passport

// launch
app.listen(8000, function(){
  console.log('listening on port 8000');
});
