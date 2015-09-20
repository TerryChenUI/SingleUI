/**
 * Created by tchen on 7/3/2015.
 */
'use strict';
angular.module('app')
    .config(["$locationProvider", '$stateProvider', '$urlRouterProvider', function ($locationProvider, $stateProvider, $urlRouterProvider) {
        //$locationProvider.html5Mode(true).hashPrefix('!');
        //$urlRouterProvider
        //    .when('/admin', '/admin')
        //    .otherwise('/home');
        $urlRouterProvider.otherwise('/home');

        $stateProvider
            .state('home', {
                url: '/home',
                views: {
                    '': {templateUrl: 'app/home/home.tpl.html'},
                    'post@home': {templateUrl: 'app/article/list/post.tpl.html', controller: 'ListCtrl'},
                    'about@home': {templateUrl: 'app/sidebar/about.tpl.html'},
                    'archives@home': {templateUrl: 'app/sidebar/archives.tpl.html'}
                }
            })
            .state('list', {
                url: '/list/:categoryId',
                views: {
                    '': {templateUrl: 'app/article/list/list.tpl.html'},
                    'post@list': {templateUrl: 'app/article/list/post.tpl.html', controller: 'ListCtrl'},
                    'about@list': {templateUrl: 'app/sidebar/about.tpl.html'},
                    'archives@list': {templateUrl: 'app/sidebar/archives.tpl.html'}
                }
            })
            .state('detail', {
                url: '/detail/:articleId',
                templateUrl: 'app/article/detail/detail.tpl.html',
                controller: 'DetailCtrl'
            });
    }]);