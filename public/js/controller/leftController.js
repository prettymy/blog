/**
 * Created by lmy on 2017/6/6.
 */
myBlogApp.controller('leftController',['$scope','transData','Date','$stateParams','$state',function($scope,transData,Date,$stateParams,$state){
    transData.postData({},'/bloglist')
        .then(function(res){
            if(res.length>3){
                var arr = [];
                arr[0] = res[res.length-1];
                arr[1] = res[res.length-2];
                arr[2] = res[res.length-3];
                $scope.list = arr;
            }else{
                $scope.list = res;
            };
        });
    transData.postData({},'/blogessencelist')
        .then(function(res){
            if(res.length>3){
                var arr = [];
                arr[0] = res[res.length-1];
                arr[1] = res[res.length-2];
                arr[2] = res[res.length-3];
                $scope.essencelist = arr;
            }else{
                $scope.essencelist = res;
            }
        });
    //ÎÄÕÂÏêÇé
    $scope.blogdetails = function(id){
        $state.go('index.blogDetails',{blogid:id});
    }
    $scope.findtype = function(blogtype){
        transData.postData({type:blogtype},'/findtype')
            .then(function(res){
                $state.go('index.type', {typelist: JSON.stringify(res.rows)});
            });
    }
}])