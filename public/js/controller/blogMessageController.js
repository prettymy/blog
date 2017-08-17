/**
 * Created by lmy on 2017/6/22.
 */

/**
 * Created by lmy on 2017/5/17.
 */
/**
 * Created by lmy on 2017/5/14.
 */
/**
 * Created by lmy on 2017/2/6.
 */
myBlogApp.controller('blogMessageController',['$scope','transData','Date','Guid','$state',function($scope,transData,Date,Guid,$state){
    transData.postData({currpage:1,rows:10},'/blogmlist')
        .then(function(res){
            $scope.blogmlist = res.rows;
            $scope.$broadcast("FromSelf", {total: res.total});
        })
    $scope.option = {
        curr: 1,  //当前页数
        count: 10,  //最多显示的页数，默认为10
        //点击页数的回调函数，参数page为点击的页数
        click: function (page) {
            transData.postData({currpage:page,rows:10},'/blogmlist')
                .then(function(res){
                    console.log('分页结果'+res.rows);
                    $scope.blogmlist = res.rows;
                })
        }
    }
    //删除留言
    $scope.messageDel = function(id){
        transData.postData({messageId:id},'/messagedel')
            .then(function(res){
                if(res.status === 'succ'){
                    alert('删除成功！')
                    transData.postData({currpage:1,rows:10},'/blogmlist')
                        .then(function(res){
                            $scope.blogmlist = res.rows;
                            $scope.$broadcast("FromSelf", {total: res.total});
                        })
                }

            });
    };
    $scope.messageDetails = function(id){
        $state.go('index.blogDetails',{blogid:id});
    }
}]);