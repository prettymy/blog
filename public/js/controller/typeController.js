/**
 * Created by lmy on 2017/6/7.
 */
myBlogApp.controller('typeController',['$scope','transData','Date','$stateParams','$state',function($scope,transData,Date,$stateParams,$state){
    var list = JSON.parse($state.params.typelist);
    /*var length = JSON.parse($state.params.total);*/
    if(list.length==0){
        $('.noresult2').css('display','block');
    }else{
        $('.noresult2').css('display','none');
        $scope.typelist = list;
    }
    $scope.$broadcast("FromSelf", {total:length});
    $scope.option = {
        curr: 1,  //当前页数
        count: 10,  //最多显示的页数，默认为10
        //点击页数的回调函数，参数page为点击的页数
        click: function (page) {
            transData.postData({type:$state.params.type},'/findtype')
                .then(function(res){
                    console.log('分页结果'+res.rows);
                    $scope.typelist = res.rows;
                })
        }
    }
    //文章详情
    $scope.blogdetails = function(id){
        $state.go('index.blogDetails',{blogid:id});
    }
}])