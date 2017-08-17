/**
 * Created by lmy on 2017/6/6.
 */
myBlogApp.controller('searchController',['$scope','transData','Date','$stateParams','$state',function($scope,transData,Date,$stateParams,$state){
    var list = JSON.parse($state.params.bloglist);
    if(list.length==0){
        $('.noresult').css('display','block');
    }else{
        $('.noresult').css('display','none');
        $scope.bloglist = list;
    }
    //文章详情
    $scope.blogdetails = function(id){
        $state.go('index.blogDetails',{blogid:id});
    }

}])