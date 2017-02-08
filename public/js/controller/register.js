/**
 * Created by lmy on 2017/2/2.
 */
myBlogApp.controller('registerController',['$scope','transData',function($scope,transData){
    $scope.register = function(){
        var data = {
            username:$scope.user.username,
            password:$scope.user.password
        }
        console.log(data);
        transData.postData(data,'/register')
            .then(function(data){
                console.log(data);
            })
    };
    $scope.find = function(){
        transData.getData('','/find')
            .then(function(data){
                console.log(data);
            })
    };
}]);