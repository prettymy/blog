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
    /*document.location.reload();*/
    var ue = UE.getEditor('editor2',{
        initialFrameWidth : 1000
    });
    transData.postData({blogId:$stateParams.blogid},'/oneblog')
        .then(function(res){
            $scope.title = res.title;
            ue.addListener("ready", function () {
                // editor准备好之后才可以使用
                ue.setContent(res.content);
            });
          /*  $scope.content = res.content;*/
            $scope.type = res.type;
            $scope.author = res.author;
            $('.cedit').focus();
        });
    //更新文章
    $scope.cupdate = function(){
        console.log('更新');
        var nowtime = Date.getNowFormatDate();
        var data = {
            title:$scope.title,
            content:ue.getContent(),
            type:$scope.type,
            time:nowtime,
            author:$scope.author,
            blogId:$stateParams.blogid,
            isChecked:'false'
        }
        transData.postData(data,'/blogupdate')
            .then(function(res){
                alert('更新成功！');
                $state.go('mindex.blogManager');
            })
    };
}])