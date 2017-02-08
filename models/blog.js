/**
 * Created by lmy on 2017/2/6.
 */
var mongoose = require('mongoose');
var mongoconnect = require('./index.js');
var Schema = mongoose.Schema;
var blogSchema = new Schema({
    title:String,
    content:String,
    time:String
});
var Blogs = mongoose.model('Blogs', blogSchema);
exports.insert = function(req,response){
    var blog = new Blogs(req.body);
    console.log(req.body);
    blog.save(function(err,res){
        var status = {};
        if(err){
            status = {
                status:'fail'
            }
            response.end(JSON.stringify(status));
        }else{
            status = {
                status:'succ'
            }
            response.end(JSON.stringify(status));
        }
    });
}
//insert();
exports.list = function(req,response){
    Blogs.find({},function(err,res){
        if (err) {
            console.log("Error:" + err);
        }
        else {
            response.end(JSON.stringify(res))
        }
    });
}
