/**
 * Created by lmy on 2017/4/3.
 */
myBlogApp.controller('blogEditController',['$scope','transData','Date','$stateParams','$state',function($scope,transData,Date,$stateParams,$state){
    var ue = UE.getEditor('editor',{
        initialFrameWidth : 879
    });
    transData.postData({blogId:$stateParams.blogid},'/oneblog')
        .then(function(res){
            $scope.title = res.title;
            UE.getEditor('editor').setContent(res.content);
            /*$('.editcontent').append(res.content);*/
            $('.cedit').focus();
        });
    //��������
    $scope.cupdate = function(){
        var nowtime = Date.getNowFormatDate();
        var data = {
            title:$scope.title,
            content:$scope.content,
            time:nowtime,
            blogId:$stateParams.blogid
        }
        transData.postData(data,'/blogupdate')
            .then(function(res){
                console.log(res);
               $state.go('index.blog');
            })
    };
}])