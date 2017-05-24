/**
 * Created by lmy on 2017/2/25.
 */
myBlogApp.controller('blogDetailsController',['$scope','$stateParams','Date','Guid','transData',function($scope,$stateParams,Date,Guid,transData){
    transData.postData({blogId:$stateParams.blogid},'/oneblog')
        .then(function(res){
            $scope.title = res.title;
            $scope.time = res.time;
            $scope.content = res.content;
            $scope.type = res.type;
            $scope.author = res.author;
            transData.postData({blogId:$stateParams.blogid,pageView:res.pageView+1},'/pageviewupdate')
                .then(function(res){
                    console.log(res);
                })
            transData.postData({blogId:$stateParams.blogid},'/messagelist')
                .then(function(res){
                    $scope.commentdata = res;
                })
        });
    $scope.submit = function(id){
        var nowtime = Date.getNowFormatDate();
        var commentdata = {
            content:$scope.comment,
            blogId:$stateParams.blogid,
            time:nowtime,
            messageId:Guid.Guid()
        }
        transData.postData(commentdata,'/messageinsert')
            .then(function(res){
                $scope.comment = '';
                transData.postData({blogId:$stateParams.blogid},'/messagelist')
                    .then(function(res){
                        $scope.commentdata = res;
                    })
            })
    }
}])