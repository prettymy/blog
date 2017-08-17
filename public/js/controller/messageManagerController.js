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
    transData.postData({currpage:1,rows:10},'/allmessagelist')
        .then(function(res){
            $scope.messagelist = res.rows;
            $scope.$broadcast("FromSelf", {total: res.total});
            /*transData.postData({blogId:res.rows.blogId,currpage:1,rows:10},'/bloglist')
                .then(function(res){
                    for(var i=0;i<res.rows.length;i++){
                        if($scope.messagelist[i].blogId == res.rows.blogId){
                            $scope.messagelist[i].title = res.rows.title;
                        }
                    }
                })*/
        })
    $scope.option = {
        curr: 1,  //当前页数
        count: 10,  //最多显示的页数，默认为10
        //点击页数的回调函数，参数page为点击的页数
        click: function (page) {
            transData.postData({currpage:page,rows:10},'/allmessagelist')
                .then(function(res){
                    console.log('分页结果'+res.rows);
                    $scope.messagelist = res.rows;
                })
        }
    }

    //删除留言
    $scope.messageDel = function(id){
        var msg = "您真的确定要删除吗？\n\n请确认！";
        if (confirm(msg)==true){
            transData.postData({messageId:id},'/messagedel')
                .then(function(res){
                    if(res.status === 'succ'){

                        alert('删除成功！')
                        transData.postData({currpage:1,rows:10},'/allmessagelist')
                            .then(function(res){
                                $scope.messagelist = res.rows;
                                $scope.$broadcast("FromSelf", {total: res.total});
                                /*transData.postData({blogId:res.rows.blogId,currpage:1,rows:10},'/bloglist')
                                 .then(function(res){
                                 for(var i=0;i<res.rows.length;i++){
                                 if($scope.messagelist[i].blogId == res.rows.blogId){
                                 $scope.messagelist[i].title = res.rows.title;
                                 }
                                 }
                                 })*/
                            })
                    }

                });
        }else{
            return false;
        }


    };
    $scope.messageDetails = function(id){
        if(id){
            $state.go('index.blogDetails',{blogid:id});
        }
        else{
            $state.go('index.message');
        }
    }
}]);