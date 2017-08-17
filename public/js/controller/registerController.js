/**
 * Created by lmy on 2017/2/2.
 */
myBlogApp.controller('registerController',['$scope','transData','$state',function($scope,transData,$state){
    $scope.register = function(){
        var data = {
            username:$scope.user.username,
            password:$scope.user.password
        }
        console.log(data);
        transData.postData(data,'/register')
            .then(function(data){
                if(data.status=='succ'){
                    $state.go('login',{name:data.username,pass:data.password});
                }else{
                    alert(data.message);
                }
            })
    };
    $scope.gologin = function(){
        $state.go('login');
    };
}]);