/**
 * Created by lmy on 2017/2/6.
 */
myBlogApp.controller('blogController',['$scope','transData','Date','Guid','$state',function($scope,transData,Date,Guid,$state){
    //发表文章publish
    /*var ue = new UE.ui.Editor({ initialFrameWidth:879});*/
    var ue = UE.getEditor('editor',{
            initialFrameWidth : 879
    });
    $('#email').blur(function(){
        var reg = /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/;
        if(!reg.test($scope.email)){
            $('.check').css('display','block');
        }else{
            $('.check').css('display','none');
        }
    })
    $scope.publish = function(){
        var arr = UE.getEditor('editor').getContent();
        var nowtime = Date.getNowFormatDate();
        var data = {
            title:$scope.title,
            content:arr,
            type:$scope.type,
            time:nowtime,
            author:$scope.author,
            email:$scope.email,
            blogId:Guid.Guid(),
            isChecked:'false',
            pageView:0,
            isPass:'false',
            isEssence:'false'
        }
        transData.postData(data,'/bloginsert')
            .then(function(res){
                console.log(data)
                $scope.title = '';
                $scope.content = '';
                if(res.status === "fail"){
                    console.log('发表失败')
                }else if(res.status === "succ"){
                    transData.postData({currpage:1,rows:5},'/blogpasslist')
                        .then(function(data){
                            $scope.blogdata = data;
                            alert('已交由管理员审核处理');
                            $state.go('index.main');
                        })
                }
            })
    };
    //删除文章
    $scope.blogdel = function(id){
        transData.postData({blogId:id},'/blogdel')
            .then(function(res){
                if(res.status === 'succ'){
                    transData.postData({},'/bloglist')
                        .then(function(data){
                            $scope.blogdata = data;
                        })
                }

            });
    };
}]);