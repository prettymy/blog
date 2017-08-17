/**
 * Created by lmy on 2017/1/28.
 */
var index = require('./index');
var user = require('../models/user');
var blog = require('../models/blog');
var message = require('../models/message');
var nodemailer = require('../models/nodemailer');
//var comment = require('./comment');
module.exports = function(app){
    app.get('/',index.index);
    app.post('/register',user.insert);
    app.post('/find',user.find);
    app.post('/bloginsert',blog.insert);
    app.post('/blogupdate',blog.update);
    app.post('/bloglist',blog.list);
    app.post('/blogdel',blog.delete);
    app.post('/oneblog',blog.findone);
    app.post('/pageviewupdate',blog.updatePageView);
    app.post('/messagelist',message.list);
    app.post('/allmessagelist',message.alllist);
    app.post('/messageinsert',message.insert);
    app.post('/messagedel',message.delete);
    app.post('/blogispass',blog.updateIsPass);
    app.post('/blogisessence',blog.updateIsEssence);
    app.post('/blogpasslist',blog.passlist);
    app.post('/blogunpasslist',blog.unpasslist);
    app.post('/blogessencelist',blog.essencelist);
    app.post('/sendmail',nodemailer.sendmail);
    app.post('/blurfind',blog.blurfind);
    app.post('/findtype',blog.findtype);
    app.get('/error',blog.error);
    app.post('/datalength',blog.datalength);
    app.post('/systemlist',message.systemlist);
    app.post('/blogmlist',message.bloglist);
    /*app.post('/assets/ueditor',blog.ueditor);*/
};