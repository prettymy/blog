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
    $scope.mblogdetails = function(id){
        $state.go('index.blogDetails',{blogid:id});
    }
   $scope.blogexamine = function(id){
       for(var i=0;i<$scope.bloglist.length;i++){
           if(id==$scope.bloglist[i].blogId){
               if($scope.bloglist[i].isPass=='true'){
                   var updatedata = {
                       blogId:id,
                       isPass:'false',
                       isChecked:'true',
                       currpage:1,
                       rows:5
                   }
                   var mailOptions = {
                       from: '836718437@qq.com', // 发件地址
                       to: $scope.bloglist[i].email, // 收件列表
                       subject: '小博通知', // 标题
                       //text和html两者只支持一种
                       text: '小博通知', // 标题
                       html: '<b>您在小博上发布的文章，经管理员审核后发现内容不符合博文发布规定，请按照规定重新发布，谢谢~</b>' // html 内容
                   };
               }else{
                   var updatedata = {
                       blogId:id,
                       isPass:'true',
                       isChecked:'true',
                       currpage:1,
                       rows:5
                   }
                   var mailOptions = {
                       from: '836718437@qq.com', // 发件地址
                       to: $scope.bloglist[i].email, // 收件列表
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
               transData.postData({currpage:1,rows:10},'/bloglist')
                   .then(function(data){
                       $scope.bloglist = data.rows;
                       $scope.$broadcast("FromSelf", {total: data.total});
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
                        isEssence:'false',
                        currpage:1,
                        rows:5
                    }
                    transData.postData(data,'/blogisessence')
                        .then(function(res){
                            transData.postData({currpage:1,rows:10},'/bloglist')
                                .then(function(data){
                                    $scope.bloglist = data.rows;
                                    $scope.$broadcast("FromSelf", {total: data.total});
                                })
                        })
                }else{
                    var data = {
                        blogId:id,
                        isEssence:'true',
                        currpage:1,
                        rows:5
                    }
                    transData.postData({currpage:1,rows:10},'/blogessencelist')
                        .then(function(res){
                            console.log('精品数量'+res.total);
                           if(res.total>6){
                               alert('设置精品博文已达上限!');
                               return false;
                           }else{
                               transData.postData(data,'/blogisessence')
                                   .then(function(res){
                                       transData.postData({currpage:1,rows:10},'/bloglist')
                                           .then(function(data){
                                               $scope.bloglist = data.rows;
                                               $scope.$broadcast("FromSelf", {total: data.total});
                                           })
                                   })
                           }
                        })
                }
            }
        }
    }
}]);