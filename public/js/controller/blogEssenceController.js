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
    transData.postData({currpage:1,rows:10},'/blogessencelist')
        .then(function(res){
            $scope.bloglist = res.rows;
            $scope.$broadcast("FromSelf", {total: res.total});
        })
    $scope.option = {
        curr: 1,  //��ǰҳ��
        count: 10,  //�����ʾ��ҳ����Ĭ��Ϊ10
        //���ҳ���Ļص�����������pageΪ�����ҳ��
        click: function (page) {
            transData.postData({currpage:page,rows:10},'/blogessencelist')
                .then(function(res){
                    console.log('��ҳ���'+res.rows);
                    $scope.bloglist = res.rows;
                })
        }
    }
    $scope.blogcancelessence = function(id){
        for(var i=0;i<$scope.bloglist.length;i++){
            if(id==$scope.bloglist[i].blogId){
                var updatedata = {
                    blogId:id,
                    isEssence:'false'
                }
            }
        }
        transData.postData(updatedata,'/blogisessence')
            .then(function(res){
                transData.postData({currpage:1,rows:10},'/blogessencelist')
                    .then(function(res){
                        $scope.bloglist = res.rows;
                        $scope.$broadcast("FromSelf", {total: res.total});
                    })
            })

    }
}]);