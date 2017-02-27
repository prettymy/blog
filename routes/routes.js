/**
 * Created by lmy on 2017/1/28.
 */
var index = require('./index');
var user = require('../models/user');
var blog = require('../models/blog');
//var comment = require('./comment');
module.exports = function(app){
    app.get('/',index.index);
    app.post('/register',user.insert);
    app.post('/find',user.find);
    app.post('/bloginsert',blog.insert);
    app.post('/bloglist',blog.list);
    app.post('/blogdel',blog.delete);
    app.post('/oneblog',blog.findone);
};