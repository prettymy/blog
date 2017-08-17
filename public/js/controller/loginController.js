/**
 * Created by lmy on 2017/2/2.
 */
myBlogApp.controller('loginController',['$scope','transData','$stateParams','$state',function($scope,transData,$stateParams,$state){
    $scope.username = $stateParams.name;
    $scope.password = $stateParams.pass;
    $scope.login = function(){
        var data = {
            username:$scope.username,
            password:$scope.password
        }
        transData.postData(data,'/find')
            .then(function(data){
                if(data.status=='succ'){
                    $scope.username = '';
                    $('#u').val('');
                    $('#pArea').val('');
                    $state.go('mindex');

                }else{
                    alert(data.message);
                }
            })
    };
    $scope.goregist = function(){
        $state.go('register');
    }
}]);