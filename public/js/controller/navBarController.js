/**
 * Created by lmy on 2017/2/6.
 */
myBlogApp.controller('navBarController',['$scope','transData','$state',function($scope,transData,$state){
    $scope.search = function(){
        var data = {
            searchtitle:$scope.searchtitle
        };
        transData.postData(data,'/blurfind')
            .then(function(data){
                $state.go('index.search', {bloglist: JSON.stringify(data)});
            })
    }
    $('#link').mouseover(function(){
        $('#weiimg').css('display','block');
    })
    $('#link').mouseout(function(){
        $('#weiimg').css('display','none');
    })
    $('.navbar-nav li').mouseover(function(){
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
    })
    $('.navbar-nav li').click(function(){
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
    })
}]);