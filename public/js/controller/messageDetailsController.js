/**
 * Created by lmy on 2017/6/22.
 */
/**
 * Created by lmy on 2017/2/25.
 */
myBlogApp.controller('messageDetailsController',['$scope','$stateParams','Date','Guid','transData',function($scope,$stateParams,Date,Guid,transData){
        transData.postData(commentdata,'/messageinsert')
            .then(function(res){
                $scope.comment = '';
                transData.postData({blogId:$stateParams.blogid},'/messagelist')
                    .then(function(res){
                        $scope.commentdata = res;
                    })
            })
}])