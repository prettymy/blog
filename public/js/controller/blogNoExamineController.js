/**
 * Created by lmy on 2017/5/22.
 */
/**
 * Created by lmy on 2017/5/22.
 */
/**
 * Created by lmy on 2017/2/6.
 */
myBlogApp.controller('blogNoExamineController',['$scope','transData','Date','Guid','$state',function($scope,transData,Date,Guid,$state){
    transData.postData({currpage:1,rows:10},'/blogunpasslist')
        .then(function(res){
            $scope.bloglist = res.rows;
            $scope.$broadcast("FromSelf", {total: res.total});
        })
    $scope.option = {
        curr: 1,  //��ǰҳ��
        count: 10,  //�����ʾ��ҳ����Ĭ��Ϊ10
        //���ҳ���Ļص�����������pageΪ�����ҳ��
        click: function (page) {
            transData.postData({currpage:page,rows:10},'/blogunpasslist')
                .then(function(res){
                    console.log('��ҳ���'+res.rows);
                    $scope.bloglist = res.rows;
                })
        }
    }
}]);