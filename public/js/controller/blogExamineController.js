/**
 * Created by lmy on 2017/5/22.
 */
/**
 * Created by lmy on 2017/5/14.
 */
/**
 * Created by lmy on 2017/2/6.
 */
myBlogApp.controller('blogExamineController',['$scope','transData','Date','Guid','$state',function($scope,transData,Date,Guid,$state){
    transData.postData({},'/bloglist')
        .then(function(data){
            $scope.bloglist = data;
        })
   $scope.blogexamine = function(id){
       for(var i=0;i<$scope.bloglist.length;i++){
           if(id==$scope.bloglist[i].blogId){
               if($scope.bloglist[i].isPass=='true'){
                   var updatedata = {
                       blogId:id,
                       isPass:'false',
                       isChecked:'true'
                   }
                   var mailOptions = {
                       from: '836718437@qq.com', // 发件地址
                       to: 'lmyuan93@163.com', // 收件列表
                       subject: '小博通知', // 标题
                       //text和html两者只支持一种
                       text: '小博通知', // 标题
                       html: '<b>您在小博上发布的文章，经管理员审核后发现内容不符合博文发布规定，请按照规定重新发布，谢谢~</b>' // html 内容
                   };

               }else{
                   var updatedata = {
                       blogId:id,
                       isPass:'true',
                       isChecked:'true'
                   }
                   var mailOptions = {
                       from: '836718437@qq.com', // 发件地址
                       to: 'lmyuan93@163.com', // 收件列表
                       subject: '小博通知', // 标题
                       //text和html两者只支持一种
                       text: '小博通知', // 标题
                       html: '<b>恭喜您待发布的文章通过了小博管理员的审核！</b>' // html 内容
                   };
               }
           }
       }
       transData.postData(updatedata,'/blogispass')
           .then(function(res){
               transData.postData({},'/bloglist')
                   .then(function(data){
                       $scope.bloglist = data;
                   })
           })
       transData.postData(mailOptions,'/sendmail')
           .then(function(data){
               console.log('邮件发送');
           })
   }

    $scope.blogessence = function(id){
        for(var i=0;i<$scope.bloglist.length;i++){
            if(id==$scope.bloglist[i].blogId){
                if($scope.bloglist[i].isEssence=='true'){
                    var data = {
                        blogId:id,
                        isEssence:'false'
                    }
                }else{
                    var data = {
                        blogId:id,
                        isEssence:'true'
                    }
                }
            }
        }
        transData.postData(data,'/blogisessence')
            .then(function(res){
                transData.postData({},'/bloglist')
                    .then(function(data){
                        $scope.bloglist = data;
                    })
            })
    }
}]);