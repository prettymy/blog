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
exports.insert = function(request,response){
    var user = new Users(request.body);
    Users.findOne({username:request.body.username},function(err,findres){
        if(err){
            console.log('error'+err);
        }else{
            if(!findres){
                user.save(function(err,res){
                    if(err){
                        console.log('error:'+err);
                    }else{
                        response.end(JSON.stringify({
                            status:'succ',
                            message:'注册成功'
                        }));
                    }
                });
            }else{
                response.end(JSON.stringify({
                    statu:"fail",
                    message:'用户名已存在'
                }))
            }
        }
    })

}
exports.find = function(request,response){
    Users.findOne({username:request.body.username},function(err,res){
        if (err) {
            console.log("Error:" + err);
        }
        else{
            if(!res){
                response.end(JSON.stringify({
                    status:'fail',
                    message:'用户不存在'
                }));
            }else{
                var pass = res.password;
                if(pass==request.body.password){
                    response.end(JSON.stringify({
                        status:'succ',
                        message:'用户存在'
                    }));
                }
                else{
                    response.end(JSON.stringify({
                        status:'fail',
                        message:'密码有误!'}));
                }
                console.log('find res is'+res);
            }

        }
    });
}
