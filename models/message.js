/**
 * Created by lmy on 2017/5/17.
 */
var mongoose = require('mongoose');
var mongoconnect = require('./index.js');
var Schema = mongoose.Schema;
var messageSchema = new Schema({
    content:String,
    time:String,
    blogId:String,
    messageId:String,
    type:String,
    title:String
});
var Messages = mongoose.model('Messages', messageSchema);
exports.insert = function(request,response){
    console.log(request.body);
    var message = new Messages(request.body);
    message.save(function(err,res){
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
exports.list = function(request,response){
    Messages.find({blogId:request.body.blogId},function(err,res){
        if (err) {
            console.log("Error:" + err);
        }
        else{
            console.log(res);
            response.end(JSON.stringify(res));
        }
    });
}
exports.alllist = function(req,res){
    var page=req.body.currpage;
    var rows=req.body.rows;
    var skipFrom = (page-1) *rows;
    var query = Messages.find().sort({'_id':-1}).skip(skipFrom).limit(rows);
    query.exec(function(err,rs){
        if (err) {
            console.log("Error:" + err);
        }
        else{
            Messages.find(function(err,result){
                var jsonArray={rows:rs,total:result.length};
                res.end(JSON.stringify(jsonArray));
            });
        }
    });
}
exports.systemlist = function(req,res){
    var page=req.body.currpage;
    var rows=req.body.rows;
    var skipFrom = (page-1) *rows;
    var query = Messages.find({type:'网站留言'}).skip(skipFrom).limit(rows);
    query.exec(function(err,rs){
        if (err) {
            console.log("Error:" + err);
        }
        else{
            Messages.find({type:'网站留言'},function(err,result){
                var jsonArray={rows:rs,total:result.length};
                res.end(JSON.stringify(jsonArray));
            });
        }
    });
}
exports.bloglist = function(req,res){
    var page=req.body.currpage;
    var rows=req.body.rows;
    var skipFrom = (page-1) *rows;
    var query = Messages.find({type:'文章留言'}).skip(skipFrom).limit(rows);
    query.exec(function(err,rs){
        if (err) {
            console.log("Error:" + err);
        }
        else{
            Messages.find({type:'文章留言'},function(err,result){
                var jsonArray={rows:rs,total:result.length};
                res.end(JSON.stringify(jsonArray));
            });
        }
    });
}
exports.delete = function(request,response){
    console.log(request.body);
    Messages.remove({messageId:request.body.messageId},function(err,res){
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