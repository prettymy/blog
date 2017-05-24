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
                    templateUrl: 'assets/views/main.html',
                    controller:'mainController'
                },
                'left@index': {
                    templateUrl: 'assets/views/left.html',
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
        .state('index.mywork', {
            url: '/index',
            views: {
                'main@index': {
                    templateUrl: 'assets/views/main.html',
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
            url:"/login",
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
                    templateUrl: 'assets/views/aboutBlog.html',
                   /* controller:'blogManagerController'*/
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
                },
            }
        })

}]);