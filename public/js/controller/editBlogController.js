/**
 * Created by lmy on 2017/5/15.
 */
/**
 * Created by lmy on 2017/5/14.
 */
/**
 * Created by lmy on 2017/2/6.
 */
myBlogApp.controller('editBlogController',['$scope','transData','Date','$stateParams','$state',function($scope,transData,Date,$stateParams,$state){
    transData.postData({blogId:$stateParams.blogid},'/oneblog')
        .then(function(res){
            $scope.title = res.title;
            $scope.content = res.content;
            $scope.type = res.type;
            $scope.author = res.author;
            $('.cedit').focus();
        });
    //��������
    $scope.cupdate = function(){
        console.log('����');
        var nowtime = Date.getNowFormatDate();
        var data = {
            title:$scope.title,
            content:$scope.content,
            type:$scope.type,
            time:nowtime,
            author:$scope.author,
            blogId:$stateParams.blogid,
            isChecked:'false'
        }

        transData.postData(data,'/blogupdate')
            .then(function(res){
                alert('���³ɹ���');
                $state.go('mindex.blogManager');
            })
    };
}])