/**
 * Created by lmy on 2017/5/22.
 */
/**
 * Created by lmy on 2017/5/22.
 */
/**
 * Created by lmy on 2017/2/6.
 */
myBlogApp.controller('blogNoExamineController',['$scope','transData','Date','Guid','$state',function($scope,transData,Date,Guid,$state){
    transData.postData({currpage:1,rows:10},'/blogunpasslist')
        .then(function(res){
            $scope.bloglist = res.rows;
            $scope.$broadcast("FromSelf", {total: res.total});
        })
    $scope.option = {
        curr: 1,  //当前页数
        count: 10,  //最多显示的页数，默认为10
        //点击页数的回调函数，参数page为点击的页数
        click: function (page) {
            transData.postData({currpage:page,rows:10},'/blogunpasslist')
                .then(function(res){
                    console.log('分页结果'+res.rows);
                    $scope.bloglist = res.rows;
                })
        }
    }
}]);