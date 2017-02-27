/**
 * Created by lmy on 2017/2/6.
 */
var mongoose = require('mongoose');
var mongoconnect = require('./index.js');
var Schema = mongoose.Schema;
var blogSchema = new Schema({
    username:String,
    title:String,
    content:String,
    time:String,
    blogId:String
});
var Blogs = mongoose.model('Blogs', blogSchema);
exports.insert = function(request,response){
    console.log(request.body);
    var blog = new Blogs(request.body);
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
            console.log('insert success');
            response.end(JSON.stringify(status));
        }
    });
}
//insert();
exports.list = function(request,response){
    Blogs.find({username:request.body.username},function(err,res){
        if (err) {
            console.log("Error:" + err);
        }
        else{
            console.log(res);
            response.end(JSON.stringify(res));
        }
    });
}
exports.delete = function(request,response){
    console.log(request.body);
    Blogs.remove({blogId:request.body.blogId},function(err,res){
        if(err){
            console.log(err);
        }else{
            response.end(JSON.stringify({
                status:'succ',
                message:'删除成功'
            }));
        }
    })
}
exports.findone = function(request,response){
    Blogs.findOne({blogId:request.body.blogId},function(err,res){
        if(err){
            console.log(err);
        }else{
            response.end(JSON.stringify(res));
        }
    })
}