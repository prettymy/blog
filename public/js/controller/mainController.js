/**
 * Created by lmy on 2017/5/16.
 */
/**
 * Created by lmy on 2017/5/15.
 */
/**
 * Created by lmy on 2017/5/14.
 */
/**
 * Created by lmy on 2017/2/6.
 */
myBlogApp.controller('mainController',['$scope','transData','Date','$stateParams','$timeout','$state',function($scope,transData,Date,$stateParams,$timeout,$state){
    transData.postData({currpage:1,rows:10},'/blogpasslist')
        .then(function(res){
            $scope.bloglist = res.rows;
            $scope.$broadcast("FromSelf", {total: res.total});
        })
    //设置分页的参数
    $scope.option = {
        curr: 1,  //当前页数
        count: 10,  //最多显示的页数，默认为10
        //点击页数的回调函数，参数page为点击的页数
        click: function (page) {
            transData.postData({currpage:page,rows:10},'/blogpasslist')
                .then(function(res){
                    console.log('分页结果'+res.rows);
                    $scope.bloglist = res.rows;
                })
        }
    }
    //文章详情
    $scope.blogdetails = function(id){
        $state.go('index.blogDetails',{blogid:id});
    }

}])