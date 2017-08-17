/**
 * Created by lmy on 2017/5/14.
 */
/**
 * Created by lmy on 2017/2/6.
 */
myBlogApp.controller('blogManagerController',['$scope','transData','Date','Guid','$state',function($scope,transData,Date,Guid,$state){
    transData.postData({currpage:1,rows:10},'/bloglist')
        .then(function(data){
            $scope.bloglist = data.rows;
            $scope.$broadcast("FromSelf", {total: data.total});
        })
    $scope.option = {
        curr: 1,  //当前页数
        count: 10,  //最多显示的页数，默认为10
        //点击页数的回调函数，参数page为点击的页数
        click: function (page) {
            transData.postData({currpage:page,rows:10},'/bloglist')
                .then(function(res){
                    console.log('分页结果'+res.rows);
                    $scope.bloglist = res.rows;
                })
        }
    }

    $scope.search = function(){
        var data = {
            searchtitle:$scope.searchtitle
        };
        transData.postData(data,'/blurfind')
            .then(function(data){
                $scope.bloglist = data;
                $('.pagination').css('display','none');
            })
    }
    $scope.blogdetails = function(id){
        $state.go('index.blogDetails',{blogid:id});
    }
    //删除文章
    $scope.blogdel = function(id){
        var msg = "您真的确定要删除吗？\n\n请确认！";
        if (confirm(msg)==true){
            transData.postData({blogId:id},'/blogdel')
                .then(function(res){
                    if(res.status === 'succ'){
                        alert('删除成功！')
                        transData.postData({currpage:1,rows:10},'/bloglist')
                            .then(function(data){
                                $scope.bloglist = data.rows;
                                $scope.$broadcast("FromSelf", {total: data.total});
                            })
                    }

                });
        }else{
            return false;
        }

    };
    //编辑文章
    $scope.blogedit = function(id){
        $state.go('mindex.editBlog',{blogid:id});
    };
}]);