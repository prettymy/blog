/**
 * Created by lmy on 2017/2/25.
 */
myBlogApp.controller('blogDetailsController',['$scope','$stateParams','transData',function($scope,$stateParams,transData){
    transData.postData({blogId:$stateParams.blogid},'/oneblog')
        .then(function(res){
            console.log(res);
            $scope.title = res.title;
            $scope.time = res.time;
            $scope.content = res.content;
        });
}])