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
               }else{
                   var updatedata = {
                       blogId:id,
                       isPass:'true',
                       isChecked:'true'
                   }
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