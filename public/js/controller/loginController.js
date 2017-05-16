/**
 * Created by lmy on 2017/2/2.
 */
myBlogApp.controller('loginController',['$scope','transData','$state',function($scope,transData,$state){
    $scope.login = function(){
        var data = {
            username:$scope.username,
            password:$scope.password
        }
        transData.postData(data,'/find')
            .then(function(data){
                if(data.status=='succ'){
                    localStorage.setItem('username',$scope.username);
                    $state.go('mindex');

                }
            })
    };
    $scope.goregist = function(){
        $state.go('register');
    }
}]);