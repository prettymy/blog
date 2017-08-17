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
    email:String,
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
exports.list = function(req,res){
    if(req.body.currpage){
        var page=req.body.currpage;
        var rows=req.body.rows;
        var skipFrom = (page-1) *rows;
        if(req.body.blogId){
            var query = Blogs.find({blogId:req.body.blogId}).sort({'_id':-1}).skip(skipFrom).limit(rows);
        }else{
            var query = Blogs.find({}).sort({'_id':-1}).skip(skipFrom).limit(rows);
        }
        query.exec(function(err,rs){
            if (err) {
                console.log("Error:" + err);
            }
            else{
                Blogs.find({},function(err,result){
                    var jsonArray={rows:rs,total:result.length};
                    res.end(JSON.stringify(jsonArray));
                });
                /*jsonArray={rows:rs};
                 console.log(jsonArray);
                 res.end(JSON.stringify(jsonArray));*/
            }
        });
    }else{
        Blogs.find({isPass:'true'},function(err,result){
            /*var jsonArray={rows:result,total:result.length};*/
            res.end(JSON.stringify(result));
        });
    }

}
exports.datalength = function(request,response){
    Blogs.find(function(err,result){
        var jsonArray={total:result.length};
        response.end(JSON.stringify(jsonArray));
    });

}
exports.passlist = function(req,res){
    var page=req.body.currpage;
    var rows=req.body.rows;
    var skipFrom = (page-1) *rows;
    var query = Blogs.find({isPass:'true'}).sort({'_id':-1}).skip(skipFrom).limit(rows);
    query.exec(function(err,rs){
        if (err) {
            console.log("Error:" + err);
        }
        else{
            Blogs.find({isPass:'true'},function(err,result){
                var jsonArray={rows:rs,total:result.length};
                res.end(JSON.stringify(jsonArray));
            });
        }
    });
}
exports.unpasslist = function(req,res){
    var page=req.body.currpage;
    var rows=req.body.rows;
    var skipFrom = (page-1) *rows;
    var query = Blogs.find({isPass:'false'}).sort({'_id':-1}).skip(skipFrom).limit(rows);
    query.exec(function(err,rs){
        if (err) {
            console.log("Error:" + err);
        }
        else{
            Blogs.find({isPass:'false'},function(err,result){
                var jsonArray={rows:rs,total:result.length};
                res.end(JSON.stringify(jsonArray));
            });
        }
    });
}
exports.essencelist = function(req,res){
    if(req.body.currpage){
        var page=req.body.currpage;
        var rows=req.body.rows;
        var skipFrom = (page-1) *rows;
        var query = Blogs.find({isEssence:'true'}).sort({'_id':-1}).skip(skipFrom).limit(rows);
        query.exec(function(err,rs){
            if (err) {
                console.log("Error:" + err);
            }
            else{
                Blogs.find({isEssence:'true'},function(err,result){
                    var jsonArray={rows:rs,total:result.length};
                    res.end(JSON.stringify(jsonArray));
                });
            }
        });
    }else{
        Blogs.find({isEssence:'true',isPass:'true'},function(err,result){
            /*var jsonArray={rows:result,total:result.length};*/
            res.end(JSON.stringify(result));
        });
    }

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
exports.findtype = function(req,res){
   /* var page=req.body.currpage;
    var rows=req.body.rows;
    var skipFrom = (page-1) *rows;*/
    var query = Blogs.find({type:req.body.type}).sort({'_id':-1});
    query.exec(function(err,rs){
        if (err) {
            console.log("Error:" + err);
        }
        else{
            Blogs.find({type:req.body.type},function(err,result){
                var jsonArray={rows:rs,total:result.length};
                res.end(JSON.stringify(jsonArray));
            });
        }
    });
}
exports.update = function(request,response){
    Blogs.update({blogId:request.body.blogId},{$set:{title:request.body.title,content:request.body.content,time:request.body.time,type:request.body.type}},function(err,res){
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
exports.blurfind = function(req,response){
  /*  var str = req.body.searchtitle;
    var page=req.body.currpage;
    var rows=req.body.rows;
    var skipFrom = (page-1) *rows;*/
    var str = req.body.searchtitle;
    var query = {};
    /*var query = Blogs.find({title:new RegExp("^.*"+str+".*$")}).skip(skipFrom).limit(rows);*/
    query['title'] = new RegExp("^.*"+str+".*$");
    /*query.exec(function(err,rs) {
        if (err) {
            console.log("Error:" + err);
        }
        else {
            Blogs.find({title: new RegExp("^.*" + str + ".*$")}, function (err, result) {
                var jsonArray = {rows: rs, total: result.length};
                res.end(JSON.stringify(jsonArray));
            });
        }
    });*/
    Blogs.find(query,null,function(err,res){
        if(err){
            console.log(err);
        }else{
            response.end(JSON.stringify(res));
        }
    })
}
exports.error = function(request,response){
    console.log('ss');
    console.log('错误'+request);
}
/*
exports.latest = function(request,response){
    Blogs.find({},{sort:[['time',-1]]},function(err,res){
        if(err){
            console.log(err);
        }else{
            response.end(JSON.stringify(res));
            console.log("按时间排序"+res);
        }
    })
}*/