/**
 * Created by lmy on 2017/2/6.
 */
myBlogApp.controller('blogController',['$scope','transData','Date','Guid','$state',function($scope,transData,Date,Guid,$state){
    var name = localStorage.getItem('username');
    var listdata = {
        username:name
    }
    transData.postData(listdata,'/bloglist')
        .then(function(data){
            $scope.blogdata = data;
        })
    //发表文章
    $scope.publish = function(){
        var nowtime = Date.getNowFormatDate();
        var data = {
            title:$scope.title,
            content:$scope.content,
            time:nowtime,
            username:name,
            blogId:Guid.Guid()
        }
        transData.postData(data,'/bloginsert')
            .then(function(res){
                $scope.title = '';
                $scope.content = '';
                if(res.status === "fail"){
                    console.log('发表失败')
                }else if(res.status === "succ"){
                    transData.postData(listdata,'/bloglist')
                        .then(function(data){
                            $scope.blogdata = data;
                        })
                }
            })
    };
    //删除文章
    $scope.blogdel = function(id){
        transData.postData({blogId:id},'/blogdel')
            .then(function(res){
                if(res.status === 'succ'){
                    transData.postData(listdata,'/bloglist')
                        .then(function(data){
                            $scope.blogdata = data;
                        })
                }

            });
    };
    //编辑文章
    $scope.blogedit = function(id){
        $state.go('index.blogEdit',{blogid:id});
    };
    $scope.blogdetails = function(id){
        $state.go('index.blogDetails',{blogid:id});
    }
}]);