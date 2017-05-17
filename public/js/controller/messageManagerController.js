/**
 * Created by lmy on 2017/5/17.
 */
/**
 * Created by lmy on 2017/5/14.
 */
/**
 * Created by lmy on 2017/2/6.
 */
myBlogApp.controller('messageManagerController',['$scope','transData','Date','Guid','$state',function($scope,transData,Date,Guid,$state){
    transData.postData({},'/allmessagelist')
        .then(function(data){
            $scope.messagelist = data;
            transData.postData({blogId:data.blogId},'/bloglist')
                .then(function(res){
                    for(var i=0;i<res.length;i++){
                        if($scope.messagelist.blogId == res.blogId){
                            $scope.messagelist[i].title = res.title;
                        }
                    }
                })
        })
    //删除留言
    $scope.messageDel = function(id){
        transData.postData({messageId:id},'/messagedel')
            .then(function(res){
                if(res.status === 'succ'){
                    alert('删除成功！')
                    transData.postData({},'/allmessagelist')
                        .then(function(data){
                            $scope.messagelist = data;
                            transData.postData({blogId:data.blogId},'/bloglist')
                                .then(function(res){
                                    for(var i=0;i<res.length;i++){
                                        if($scope.messagelist.blogId == res.blogId){
                                            $scope.messagelist[i].title = res.title;
                                        }
                                    }
                                })
                        })
                }

            });
    };
    $scope.messageDetails = function(id){
        $state.go('index.blogDetails',{blogid:id});
    }
}]);