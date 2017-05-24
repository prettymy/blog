/**
 * Created by lmy on 2017/5/24.
 */
/**
 * Created by lmy on 2017/5/22.
 */
/**
 * Created by lmy on 2017/5/14.
 */
/**
 * Created by lmy on 2017/2/6.
 */
myBlogApp.controller('blogEssenceController',['$scope','transData','Date','Guid','$state',function($scope,transData,Date,Guid,$state){
    transData.postData({},'/blogessencelist')
        .then(function(data){
            $scope.bloglist = data;
        })
    $scope.blogcancelessence = function(id){
        for(var i=0;i<$scope.bloglist.length;i++){
            if(id==$scope.bloglist[i].blogId){
                var updatedata = {
                    blogId:id,
                    isEssence:'false',
                }
            }
        }
        transData.postData(updatedata,'/blogisessence')
            .then(function(res){
                transData.postData({},'/blogessencelist')
                    .then(function(data){
                        $scope.bloglist = data;
                    })
            })
    }
}]);