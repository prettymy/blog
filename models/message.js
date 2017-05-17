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
    messageId:String
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
exports.alllist = function(request,response){
    Messages.find(function(err,res){
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
    Messages.remove({messageId:request.body.messageId},function(err,res){
        if(err){
            console.log(err);
        }else{
            response.end(JSON.stringify({
                status:'succ',
                message:'É¾³ý³É¹¦'
            }));
        }
    })
}