"use strict";
angular.module('app.nav')
    .directive('breadPanel', function () {
        return {
            restrict: 'E',
            transclude: true,
            replace: true,
            templateUrl: 'navgation/breadcrumb/breadcrumb.tpl.html',
            controller: ['$scope', '$stateParams', 'ArticleService', 'CategoryService', function ($scope, $stateParams, ArticleService, CategoryService) {
                $scope.initController = function () {
                    ArticleService.getArticleById($stateParams.articleId).then(function (article) {
                        CategoryService.getCategoryById(article.CategoryId).then(function (category) {
                            $scope.Category = category;
                        });
                    });
                };

                $scope.initController();
            }]
        };
    });