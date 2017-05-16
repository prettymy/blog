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
myBlogApp.controller('mainController',['$scope','transData','Date','$stateParams','$state',function($scope,transData,Date,$stateParams,$state){
    transData.postData({},'/bloglist')
        .then(function(res){
            console.log('das');
            $scope.bloglist = res;
        });
    //ÎÄÕÂÏêÇé
    $scope.blogdetails = function(id){
        $state.go('index.blogDetails',{blogid:id});
    }

}])