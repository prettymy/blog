/**
 * Created by lmy on 2017/2/6.
 */
myBlogApp.controller('blogController',['$scope','transData','Date',function($scope,transData,Date){
    transData.getData('','/bloglist')
        .then(function(data){
            $scope.blogdata = data;
        })
    $scope.publish = function(){
        var nowtime = Date.getNowFormatDate();
        var data = {
            title:$scope.title,
            content:$scope.content,
            time:nowtime
        }
        transData.postData(data,'/bloginsert')
            .then(function(res){
                $scope.title = '';
                $scope.content = '';
                if(res.status === "fail"){
                    console.log('发表失败')
                }else if(res.status === "succ"){
                    transData.getData('','/bloglist')
                        .then(function(data){
                            $scope.blogdata = data;
                        })
                }
            })
    }
}]);