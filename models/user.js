/**
 * Created by lmy on 2017/1/28.
 */
//数据处理
var mongoose = require('mongoose');
var mongoconnect = require('./index.js');
var Schema = mongoose.Schema;
var userSchema = new Schema({
    username:String,
    password:String
});
var Users = mongoose.model('Users', userSchema);
exports.insert = function(req,res){
    var user = new Users(req.body);
    console.log(req.body);
    user.save(function(err,res){
        if(err){
            console.log('error:'+err);
        }else{
            console.log(res);
        }
    });
}
//insert();
exports.find = function(req,response){
    Users.find(req.body,function(err,res){
        if (err) {
            console.log("Error:" + err);
        }
        else {
            if(res){
                var succdata = {
                    status:'succ',
                    message:'用户存在'
                }
                response.end(JSON.stringify(succdata));
                console.log('find res is'+res);
            }else{
                var faildata = {
                    status:'fail',
                    message:'用户不存在'
                }
                response.end(JSON.stringify(faildata));
            }

        }
    });
}
