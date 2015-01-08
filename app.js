var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var session = require('express-session')
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var debug = require('debug')('school_hub');
var util = require('util');
var config = require('./config');
var mongoose = require('mongoose');
var app = express();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.set('port', process.env.PORT || 3000);
// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(cookieParser());
app.use(session({
  secret: '1234567890!@#$%^&*()',
  resave: false,
  saveUninitialized: false
}))
app.use(express.static(path.join(__dirname, 'public')));

// mongose database
mongoose.connect(config.mongodb);
mongoose.connection.on('connected', function () {
  util.log('Mongo Database Conected 1');
});

process.on('SIGINT', function () {
  mongoose.connection.close(function () {
    console.log('database disconnected through app termination');
    process.exit(0);
  });
});

// error handlers

// development error handler
// will print stacktrace

// define an app controller
require('./controller')(app);

// production error handler
// no stacktraces leaked to user
app.use(function (req, res, next) {
  res.render('error');
});

app.use(function (err, req, res, next) {

});

var server = app.listen(app.get('port'), function () {
  util.log('Express server listening on port ' + server.address().port);
});