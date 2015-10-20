/**
 * Created by tchen on 7/8/2015.
 */
angular.module('app.admin.content')
    .controller('ListArticleCtrl', ['$scope', 'ArticleService', function ($scope, ArticleService) {
        $scope.resource = {
            "header": [],
            "rows": [],
            "pagination": {
                "count": 5,
                "page": 1,
                "pages": 7,
                "size": 34
            }
        };
        $scope.initController = function () {
            $scope.articleId = 1;
            ArticleService.getArticles($scope.articleId, 1, 5, function (res) {
                $scope.resource.rows = res.data;
            });
        };

        $scope.deleteArticle = function (id) {
            if (confirm("Are you sure to delete the data?")) {
                ArticleService.deleteArticle(id, function () {
                    alert("Delete successfully");
                });
            }
        };

        $scope.initController();
    }])
    .controller('EditArticleCtrl', ['$scope', '$stateParams', '$state', '$timeout', 'CategoryService', 'ArticleService', 'Upload', function ($scope, $stateParams, $state, $timeout, CategoryService, ArticleService, Upload) {
        var articleId = ($stateParams.id) ? parseInt($stateParams.id) : 0;
        var original = {};
        //var ue = UE.getEditor('editor');
        $scope.article = {};
        $scope.title = articleId > 0 ? '编辑文章' : '添加文章';
        $scope.categories = [];

        $scope.initController = function () {
            CategoryService.getCategories().then(function (data) {
                for (var i = 0; i < data.length; i++) {
                    $scope.categories.push({
                        name: data[i].Name,
                        value: data[i].Id
                    });
                }
                $scope.article.CategoryId = $scope.categories[0].value;
            });

            if (articleId > 0) {
                ArticleService.getArticleById(articleId).then(function (data) {
                    $scope.article = data;
                    original = angular.copy(data);
                });
            }
        };

        $scope.saveArticle = function () {
            $scope.article.Content = UE.getEditor('editor').getContent();
            if (articleId <= 0) {
                ArticleService.insertArticle($scope.article, function () {
                    alert("Add successfully");
                    $state.go('article');
                });
            } else {
                ArticleService.updateArticle(articleId, $scope.article, function () {
                    alert("update successfully");
                    $state.go('article');
                });
            }
        };

        $scope.isClean = function () {
            return angular.equals(original, $scope.article);
        };

        $scope.uploadFiles = function (file, errFiles) {
            $scope.f = file;
            $scope.errFile = errFiles && errFiles[0];
            if (file) {
                file.upload = Upload.upload({
                    url: '/api/uploads',
                    data: {file: file}
                });

                file.upload.then(function (response) {
                    $timeout(function () {
                        file.result = response.data.success;
                        $scope.showImg = response.data.success;
                        $scope.imgUrl = response.data.imgUrl;
                    });
                }, function (response) {
                    if (response.status > 0)
                        $scope.errorMsg = response.status + ': ' + response.data;
                }, function (evt) {
                    file.progress = Math.min(100, parseInt(100.0 *
                        evt.loaded / evt.total));
                });
            }
        };

        $scope.initController();
    }]);