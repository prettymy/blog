/**
 * Created by lmy on 2017/2/8.
 */

var express = require('express');
var app = express();
var route = require('./routes/routes');
var http = require('http');
var path = require('path');
var bodyParser = require('body-parser');
var port = '8088';
app.set('port',port);
app.set('view',__dirname + '/index.html');
//app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'build')));
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(require('connect').bodyParser());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.methodOverride());
app.use(express.cookieParser('your secret here'));
app.use(express.session());
app.use(app.router);
route(app);
var server = http.createServer(app);
server.listen(port);
console.log('http connect success');