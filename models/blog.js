/**
 * Created by lmy on 2017/2/6.
 */
var mongoose = require('mongoose');
var mongoconnect = require('./index.js');
var Schema = mongoose.Schema;
var blogSchema = new Schema({
    title:String,
    content:String,
    type:String,
    isChecked:String,
    time:String,
    author:String,
    blogId:String,
    pageView:Number,
    isPass:String,
    isEssence:String
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
    Blogs.find(function(err,res){
        if (err) {
            console.log("Error:" + err);
        }
        else{
            console.log(res);
            response.end(JSON.stringify(res));
        }
    });
}
exports.passlist = function(request,response){
    Blogs.find({isPass:'true'},function(err,res){
        if (err) {
            console.log("Error:" + err);
        }
        else{
            console.log(res);
            response.end(JSON.stringify(res));
        }
    });
}
exports.unpasslist = function(request,response){
    Blogs.find({isPass:'false'},function(err,res){
        if (err) {
            console.log("Error:" + err);
        }
        else{
            console.log(res);
            response.end(JSON.stringify(res));
        }
    });
}
exports.essencelist = function(request,response){
    Blogs.find({isEssence:'true'},function(err,res){
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
exports.update = function(request,response){
    console.log(request.body);
    Blogs.update({blogId:request.body.blogId},{$set:{title:request.body.title,content:request.body.content,time:request.body.time}},function(err,res){
        if(err){
            console.log(err);
        }else{
            response.end(JSON.stringify(res));
        }
    })
}
exports.updatePageView = function(request,response){
    Blogs.update({blogId:request.body.blogId},{$set:{pageView:request.body.pageView}},function(err,res){
        if(err){
            console.log(err);
        }else{
            response.end(JSON.stringify(res));
        }
    })
}
exports.updateIsPass = function(request,response){
    Blogs.update({blogId:request.body.blogId},{$set:{isPass:request.body.isPass,isChecked:request.body.isChecked}},function(err,res){
        if(err){
            console.log(err);
        }else{
            response.end(JSON.stringify(res));
        }
    })
}
exports.updateIsEssence = function(request,response){
    Blogs.update({blogId:request.body.blogId},{$set:{isEssence:request.body.isEssence}},function(err,res){
        if(err){
            console.log(err);
        }else{
            response.end(JSON.stringify(res));
        }
    })
}