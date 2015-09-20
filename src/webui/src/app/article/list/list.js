/**
 * Created by tchen on 7/6/2015.
 */
angular.module('app.article')
    .controller('ListCtrl', ['$scope', '$stateParams', 'ArticleService', function ($scope, $stateParams, ArticleService) {
        //console.log($stateParams.categoryId);
        $scope.articles = [];
        $scope.currentPage = 1;
        $scope.itemsPerPage = 2;
        //$scope.maxSize = 5;
        //$scope.totalItems = 5;

        $scope.initController = function () {
            getData();
        };

        $scope.pageChanged = function () {
            getData();
            //window.location.hash = '#top';
            //console.log('Page changed to: ' + $scope.currentPage);
        };

        getData = function () {
            ArticleService.getArticlesByCategoryId(
                $stateParams.categoryId,
                $scope.currentPage,
                $scope.itemsPerPage,
                function (res) {
                    $scope.articles = res.data;
                    $scope.totalItems = res.pagination.total;
                }
            );
        };

        $scope.initController();
    }]);