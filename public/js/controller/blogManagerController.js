/**
 * Created by lmy on 2017/5/14.
 */
/**
 * Created by lmy on 2017/2/6.
 */
myBlogApp.controller('blogManagerController',['$scope','transData','Date','Guid','$state',function($scope,transData,Date,Guid,$state){
    /*var name = localStorage.getItem('username');
    var listdata = {
        username:name
    }*/
    transData.postData({},'/bloglist')
        .then(function(data){
            $scope.bloglist = data;
        })
    console.log($scope.bloglist);
    //删除文章
    $scope.blogdel = function(id){
        transData.postData({blogId:id},'/blogdel')
            .then(function(res){
                if(res.status === 'succ'){
                    alert('删除成功！')
                    transData.postData({},'/bloglist')
                        .then(function(data){
                            $scope.bloglist = data;
                        })
                }

            });
    };
    //编辑文章
    $scope.blogedit = function(id){
        $state.go('mindex.editBlog',{blogid:id});
    };
    $scope.blogdetails = function(id){
        $state.go('index.blogDetails',{blogid:id});
    }
}]);