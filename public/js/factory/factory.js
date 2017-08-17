/**
 * Created by lmy on 2017/2/2.
 */
myBlogApp.factory('transData',["$http",'$q','$state',function($http,$q,$state){
    var postData = function(data,url){
        var deffered = $q.defer();
        $http({
            method:'POST',
            url:url,
            data:data
        })
            .success(function(data){
                console.log('地址:----------------------------');
                console.log(url);
                console.log('数据:----------------------------');
                console.log(data);
                if(!data.suc&&data.errCode==5002){
                    $state.go('login');
                }
                deffered.resolve(data);
            })
            .error(function(data){
                deffered.reject(data);
            })
        return deffered.promise;
    }
    var getData = function(data,url){
        var deffered = $q.defer();
        $http({
            method:'GET',
            url:url,
            data:data
        })
            .success(function(data){
                console.log('地址:----------------------------');
                console.log(url);
                console.log('数据:----------------------------');
                console.log(data);
                if(!data.suc&&data.errCode==5002){
                    $state.go('login');
                }
                deffered.resolve(data);
            })
            .error(function(data){
                deffered.reject(data);
            })
        return deffered.promise;
    }
    return {
        postData:postData,
        getData:getData
    }
}]);
myBlogApp.factory('Date',function(){
    var getNowFormatDate = function(){
        var date = new Date();
        var seperator1 = "-";
        var seperator2 = ":";
        var month = date.getMonth() + 1;
        var strDate = date.getDate();
        if (month >= 1 && month <= 9) {
            month = "0" + month;
        }
        if (strDate >= 0 && strDate <= 9) {
            strDate = "0" + strDate;
        }
        var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate
            + " " + date.getHours() + seperator2 + date.getMinutes()
            + seperator2 + date.getSeconds();
        return currentdate;
    }
    return {
        getNowFormatDate:getNowFormatDate
    }
});
myBlogApp.factory('Guid',function(){
    var Guid = function(){
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
            return v.toString(16);
        });
    }
    return {
        Guid:Guid
    }
})
