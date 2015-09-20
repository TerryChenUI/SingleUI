/**
 * Created by tchen on 7/3/2015.
 */
'use strict';
angular.module('app.admin')
    .config(["$locationProvider", '$stateProvider', '$urlRouterProvider', function ($locationProvider, $stateProvider, $urlRouterProvider) {
        //$locationProvider.html5Mode(true);
        //$urlRouterProvider.otherwise('/admin');

        $stateProvider
            .state('home', {
                url: '/home',
                views: {
                    '': {templateUrl: 'app/home/home.tpl.html'}
                }
            })
            .state('category', {
                url: '/category/list',
                templateUrl: 'app/content/category/list.tpl.html',
                controller: 'ListCategoryCtrl'
            })
            .state('editCategory', {
                url: '/category/edit/:id',
                templateUrl: 'app/content/category/edit.tpl.html',
                controller: 'EditCategoryCtrl'
            })
            .state('article', {
                url: '/article/list',
                templateUrl: 'app/content/article/list.tpl.html',
                controller: 'ListArticleCtrl'
            })
            .state('editArticle', {
                url: '/article/edit/:id',
                templateUrl: 'app/content/article/edit.tpl.html',
                controller: 'EditArticleCtrl'
            });
    }]);