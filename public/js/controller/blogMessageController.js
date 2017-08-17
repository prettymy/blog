/**
 * Created by lmy on 2017/6/22.
 */

/**
 * Created by lmy on 2017/5/17.
 */
/**
 * Created by lmy on 2017/5/14.
 */
/**
 * Created by lmy on 2017/2/6.
 */
myBlogApp.controller('blogMessageController',['$scope','transData','Date','Guid','$state',function($scope,transData,Date,Guid,$state){
    transData.postData({currpage:1,rows:10},'/blogmlist')
        .then(function(res){
            $scope.blogmlist = res.rows;
            $scope.$broadcast("FromSelf", {total: res.total});
        })
    $scope.option = {
        curr: 1,  //��ǰҳ��
        count: 10,  //�����ʾ��ҳ����Ĭ��Ϊ10
        //���ҳ���Ļص�����������pageΪ�����ҳ��
        click: function (page) {
            transData.postData({currpage:page,rows:10},'/blogmlist')
                .then(function(res){
                    console.log('��ҳ���'+res.rows);
                    $scope.blogmlist = res.rows;
                })
        }
    }
    //ɾ������
    $scope.messageDel = function(id){
        transData.postData({messageId:id},'/messagedel')
            .then(function(res){
                if(res.status === 'succ'){
                    alert('ɾ���ɹ���')
                    transData.postData({currpage:1,rows:10},'/blogmlist')
                        .then(function(res){
                            $scope.blogmlist = res.rows;
                            $scope.$broadcast("FromSelf", {total: res.total});
                        })
                }

            });
    };
    $scope.messageDetails = function(id){
        $state.go('index.blogDetails',{blogid:id});
    }
}]);