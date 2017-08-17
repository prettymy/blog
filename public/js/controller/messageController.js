/**
 * Created by lmy on 2017/6/15.
 */
myBlogApp.controller('messageController',['$scope','transData','Date','Guid','$state',function($scope,transData,Date,Guid,$state){
    transData.postData({currpage:1,rows:10},'/systemlist')
        .then(function(res){
            $scope.systemlist = res.rows;
            console.log($scope.systemlist);
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
                    $scope.systemlist = res.rows;
                })
        }
    }
    var nowtime = Date.getNowFormatDate();
    $scope.publish = function(){
        var commentdata = {
            content:$scope.comment,
            time:nowtime,
            messageId:Guid.Guid(),
            type:'网站留言'
        }
        transData.postData(commentdata,'/messageinsert')
            .then(function(res){
                transData.postData({currpage:1,rows:10},'/systemlist')
                    .then(function(res){
                        $scope.systemlist = res.rows;
                        console.log($scope.systemlist);
                        $scope.$broadcast("FromSelf", {total: res.total});
                    })
            })
    }

}])