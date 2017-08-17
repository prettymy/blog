/**
 * Created by lmy on 2017/1/31.
 */
var allpage = 0;
var myBlogApp = angular.module('myBlogApp',['ui.router']);
myBlogApp.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
    $urlRouterProvider.otherwise('login')
        .when('register','/register')
    $stateProvider
        .state('index', {
            url: '/index',
            views: {
                '':{
                    templateUrl: 'assets/views/index.html'
                },
                'navbar@index': {
                    templateUrl: 'assets/views/navbar.html',
                    controller:'navBarController'
                },
                'main@index': {
                    templateUrl: 'assets/views/main.html',
                    controller:'mainController'
                },
                'left@index': {
                    templateUrl: 'assets/views/left.html',
                    controller:'leftController'
                },
            }
        })
        .state('index.main', {
            url: '/index',
            views: {
                'main@index': {
                    templateUrl: 'assets/views/main.html',
                    controller:'mainController'
                }
            }
        })
        .state('index.search', {
            url: '/search/:bloglist',
            views: {
                'main@index': {
                    templateUrl:'assets/views/search.html',
                    controller:'searchController'
                }
            }
        })
        .state('index.type', {
            url: '/type/:typelist/:type/:total',
            views: {
                'main@index': {
                    templateUrl:'assets/views/type.html',
                    controller:'typeController'
                }
            }
        })
        .state('index.blog', {
            url: '/blog',
            views: {
                'main@index': {
                    templateUrl: 'assets/views/blog.html',
                    controller:'blogController'
                }
            }
        })
        .state('index.message', {
            url: '/message',
            views: {
                'main@index': {
                    templateUrl: 'assets/views/message.html',
                    controller:'messageController'
                }
            }
        })
        .state('index.blogDetails', {
            url: '/blogDetails?blogid',
            views: {
                'main@index': {
                    templateUrl: 'assets/views/blogDetails.html',
                    controller:'blogDetailsController'
                }
            }
        })
        .state('index.blogEdit', {
            url: '/blogEdit?blogid',
            views: {
                'main@index': {
                    templateUrl: 'assets/views/blogEdit.html',
                    controller:'blogEditController'
                }
            }
        })
        .state('index.myfootprints',{
            url:'/myfootprints',
            view:{
                'main@index':{
                    templateUrl:'assets/views/footprints.html',
                    controller:'footprintsController'
                }
            }
        })
        .state('login',{
            url:"/login?name&pass",
            templateUrl:'assets/views/login.html',
            controller:'loginController'
        })
        .state('register',{
            url:'/register',
            templateUrl:'assets/views/register.html',
            controller:'registerController'
        })
        .state('mindex', {
            url: '/mindex',
            views: {
                '':{
                    templateUrl: 'assets/views/manageIndex.html'
                },
                'mnavbar@mindex': {
                    templateUrl: 'assets/views/mnavbar.html',
                },
                'mleft@mindex': {
                    templateUrl: 'assets/views/mleft.html',
                },
                'mright@mindex': {
                    templateUrl: 'assets/views/blogManager.html',
                    controller:'blogManagerController'
                },
            }
        })
        .state('mindex.aboutBlog', {
            url: '/mindex.aboutBlog',
            views: {
                'mright@mindex': {
                    templateUrl: 'assets/views/aboutBlog.html',
                    /* controller:'blogManagerController'*/
                },
            }
        })
        .state('mindex.blogManager', {
            url: '/mindex.blogManage',
            views: {
                'mright@mindex': {
                    templateUrl: 'assets/views/blogManager.html',
                     controller:'blogManagerController'
                },
            }
        })
        .state('mindex.editBlog', {
            url: '/mindex.editBlog?blogid',
            views: {
                'mright@mindex': {
                    templateUrl: 'assets/views/editBlog.html',
                    controller:'editBlogController'
                },
            }
        })
        .state('mindex.messageManger', {
            url: '/mindex.messageManger',
            views: {
                'mright@mindex': {
                    templateUrl: 'assets/views/messageManger.html',
                    controller:'messageManagerController'
                },
            }
        })
        .state('mindex.blogExamine', {
            url: '/mindex.blogExamine',
            views: {
                'mright@mindex': {
                    templateUrl: 'assets/views/blogExamine.html',
                    controller:'blogExamineController'
                },
            }
        })
        .state('mindex.blogYesExamine', {
            url: '/mindex.blogYesExamine',
            views: {
                'mright@mindex': {
                    templateUrl: 'assets/views/blogYesExamine.html',
                    controller:'blogYesExamineController'
                },
            }
        })
        .state('mindex.blogNoExamine', {
            url: '/mindex.blogNoExamine',
            views: {
                'mright@mindex': {
                    templateUrl: 'assets/views/blogNoExamine.html',
                    controller:'blogNoExamineController'
                },
            }
        })
        .state('mindex.blogEssence', {
            url: '/mindex.blogEssence',
            views: {
                'mright@mindex': {
                    templateUrl: 'assets/views/blogEssence.html',
                    controller:'blogEssenceController'
                }
            }
        })
        .state('mindex.systemMessage', {
            url: '/mindex.systemMessage',
            views: {
                'mright@mindex': {
                    templateUrl: 'assets/views/systemMessage.html',
                    controller:'systemMessageController'
                }
            }
        })
        .state('mindex.blogMessage', {
            url: '/mindex.blogMessage',
            views: {
                'mright@mindex': {
                    templateUrl: 'assets/views/blogMessage.html',
                    controller:'blogMessageController'
                }
            }
        })

}]);
myBlogApp.directive('myPagination', function () {
    return {
        restrict: 'EA',
        replace: true,
        scope: {
            option: '=pageOption'
        },
        template: '<ul class="pagination">' +
        '<li ng-click="pageClick(p)" ng-repeat="p in page track by $index" class="{{option.curr==p?\'active\':\'\'}}">' +
        '<a href="javascript:;">{{p}}</a>' +
        '</li>' +
        '</ul>',
        link: function ($scope) {
            //容错处理
            $scope.$on("FromSelf", function (event, data) {
                $scope.option.all = Math.ceil(data.total/10);
                if (!$scope.option.curr || isNaN($scope.option.curr) || $scope.option.curr < 1) $scope.option.curr = 1;
                if (!$scope.option.all || isNaN($scope.option.all) || $scope.option.all < 1) $scope.option.all = 1;
                if ($scope.option.curr > $scope.option.all) $scope.option.curr = $scope.option.all;
                if (!$scope.option.count || isNaN($scope.option.count) || $scope.option.count < 1) $scope.option.count = 10;
                //得到显示页数的数组
                $scope.page = getRange($scope.option.curr, $scope.option.all, $scope.option.count);
            });
            //绑定点击事件
            $scope.pageClick = function (page) {
                if (page == '上一页') {
                    page = parseInt($scope.option.curr) - 1;
                } else if (page == '下一页') {
                    page = parseInt($scope.option.curr) + 1;
                }
                if (page < 1) page = 1;
                else if (page > $scope.option.all) page = $scope.option.all;
                //点击相同的页数 不执行点击事件
                if (page == $scope.option.curr) return;
                if ($scope.option.click && typeof $scope.option.click === 'function') {
                    $scope.option.click(page);
                    $scope.option.curr = page;
                    $scope.page = getRange($scope.option.curr, $scope.option.all, $scope.option.count);
                }
            };
            //返回页数范围（用来遍历）
            function getRange(curr, all, count) {
                //计算显示的页数
                curr = parseInt(curr);
                all = parseInt(all);
                count = parseInt(count);
                var from = curr - parseInt(count / 2);
                var to = curr + parseInt(count / 2) + (count % 2) - 1;
                //显示的页数容处理
                if (from <= 0) {
                    from = 1;
                    to = from + count - 1;
                    if (to > all) {
                        to = all;
                    }
                }
                if (to > all) {
                    to = all;
                    from = to - count + 1;
                    if (from <= 0) {
                        from = 1;
                    }
                }
                var range = [];
                for (var i = from; i <= to; i++) {
                    range.push(i);
                }
                range.push('上一页');
                range.unshift('下一页');
                return range;
            }

        }
    }
});
