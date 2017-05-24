/**
 * Created by lmy on 2017/5/22.
 */
/**
 * Created by lmy on 2017/5/22.
 */
/**
 * Created by lmy on 2017/5/14.
 */
/**
 * Created by lmy on 2017/2/6.
 */
myBlogApp.controller('blogYesExamineController',['$scope','transData','Date','Guid','$state',function($scope,transData,Date,Guid,$state){
    transData.postData({},'/blogpasslist')
        .then(function(data){
            $scope.bloglist = data;
        })
}]);