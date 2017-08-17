
/**
 * Created by lmy on 2017/5/17.
 */
/**
 * Created by lmy on 2017/5/14.
 */
/**
 * Created by lmy on 2017/2/6.
 */
myBlogApp.controller('systemMessageController',['$scope','transData','Date','Guid','$state',function($scope,transData,Date,Guid,$state){
    transData.postData({currpage:1,rows:10},'/systemlist')
        .then(function(res){
            $scope.messagelist = res.rows;
            $scope.$broadcast("FromSelf", {total: res.total});
        })
    $scope.option = {
        curr: 1,  //当前页数
        count: 10,  //最多显示的页数，默认为10
        //点击页数的回调函数，参数page为点击的页数
        click: function (page) {
            transData.postData({currpage:page,rows:10},'/systemlist')
                .then(function(res){
                    console.log('分页结果'+res.rows);
                    $scope.messagelist = res.rows;
                })
        }
    }
    //删除留言
    $scope.messageDel = function(id){
        transData.postData({messageId:id},'/messagedel')
            .then(function(res){
                if(res.status === 'succ'){
                    alert('删除成功！')
                    transData.postData({currpage:1,rows:10},'/systemlist')
                        .then(function(res){
                            $scope.messagelist = res.rows;
                            $scope.$broadcast("FromSelf", {total: res.total});
                        })
                }

            });
    };
    $scope.messageDetail = function(){
        $state.go('index.message');
    }
}]);