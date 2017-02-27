/**
 * Created by lmy on 2017/1/31.
 */
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
                    templateUrl: 'assets/views/myWork.html',
                }
            }
        })
        .state('index.mywork', {
            url: '/mywork',
            views: {
                'main@index': {
                    templateUrl: 'assets/views/myWork.html',
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
        .state('index.blogDetails', {
            url: '/blogDetails?blogid',
            views: {
                'main@index': {
                    templateUrl: 'assets/views/blogDetails.html',
                    controller:'blogDetailsController'
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
            url:"/login",
            templateUrl:'assets/views/login.html',
            controller:'loginController'
        })
        .state('register',{
            url:'/register',
            templateUrl:'assets/views/register.html',
            controller:'registerController'
        })
}]);