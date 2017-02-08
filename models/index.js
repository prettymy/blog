/**
 * Created by lmy on 2017/1/29.
 */
var mongoose = require('mongoose');
var Users = require('./user');
var url = 'mongodb://localhost:27017/NodeJs';
var db = mongoose.connect(url);
/**
 * 连接成功
 */
mongoose.connection.on('connected', function () {
    console.log('Mongoose connection open to '+url);
});

/**
 * 连接异常
 */
mongoose.connection.on('error',function (err) {
    console.log('Mongoose connection error: ' + err);
});

/**
 * 连接断开
 */
mongoose.connection.on('disconnected', function () {
    console.log('Mongoose connection disconnected');
});


