/**
 * Created by lmy on 2017/2/8.
 */

var express = require('express');
var app = express();
var route = require('./routes/routes');
var bodyParser = require('body-parser');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var ejs = require('ejs');
var ueditor = require('ueditor');

var http = require('http');
/*var fs = require('fs');
var url = require('url');*/
var path = require('path');

var port = '8088';
app.set('port',port);

app.use(express.static(path.join(__dirname, 'build')));
// Set 'views' directory for any views
app.set('views', path.join(__dirname, 'views'));
app.engine('.html', ejs.__express);
app.set('view engine', 'html');


app.use(express.favicon());
app.use(express.logger('dev'));
/*app.use(require('connect').bodyParser());*/
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(express.methodOverride());
app.use(express.cookieParser('your secret here'));
app.use(express.session());
app.use(app.router);
route(app);
var server = http.createServer(app);
server.listen(port);
console.log('http connect success');

app.use("/assets/ueditor/ue", ueditor(path.join(__dirname, 'build'), function(req, res, next) {
    // ueditor 客户发起上传图片请求
    if (req.query.action === 'uploadimage') {
         var foo = req.ueditor;
         var imgname = req.ueditor.filename;
         console.log('图片名称'+imgname);
         var img_url = 'assets/images/ueditor/';
         //你只要输入要保存的地址 。保存操作交给ueditor来做
         res.ue_up(img_url);
        console.log('上传照片');
    }
    //  客户端发起图片列表请求
    else if (req.query.action === 'listimage') {
        /* var dir_url = '/images/ueditor/';
         // 客户端会列出 dir_url 目录下的所有图片
         res.ue_list(dir_url);*/
        console.log('列表图片');
    }
    // 客户端发起其它请求
    else {
        console.log('其他请求');
        res.setHeader('Content-Type', 'application/json');
        res.redirect('assets/ueditor/node/config.json');
    }
}));

