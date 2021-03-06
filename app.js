/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars')

var index = require('./routes/index');
var order = require('./routes/order');
var orderHistory = require('./routes/orderHistory');
var liveKitchen = require('./routes/liveKitchen');
var sharingBoard = require('./routes/sharingBoard');
var user = require('./routes/user');
var postSharing = require('./routes/postSharing');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('Intro HCI secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// Add routes here
// Example route
app.get('/', index.view);
app.get('/index', index.view);
app.get('/order', order.view);
app.get('/orderHistory', orderHistory.view);
app.get('/liveKitchen', liveKitchen.view);
app.get('/sharingBoard', sharingBoard.view);
app.get('/user', user.view);
app.post('/postSharing', postSharing.postNew);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});