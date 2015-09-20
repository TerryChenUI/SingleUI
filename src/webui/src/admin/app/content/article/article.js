/**
 * Created by tchen on 7/8/2015.
 */
angular.module('app.admin.content')
    .controller('ListArticleCtrl', ['$scope', 'ArticleService', function ($scope, ArticleService) {
        $scope.initController = function () {
            $scope.articleId = 1;
            ArticleService.getArticles($scope.articleId, 1, 5, function (res) {
                $scope.articles = res.data;
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
    .controller('EditArticleCtrl', ['$scope', '$stateParams', '$state', 'CategoryService', 'ArticleService', 'FileUploader', function ($scope, $stateParams, $state, CategoryService, ArticleService, FileUploader) {
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

            $scope.initFileUpload();
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

        $scope.initFileUpload = function(){
            var uploader = $scope.uploader = new FileUploader({
                url: 'test.php'
            });

            // FILTERS

            uploader.filters.push({
                name: 'customFilter',
                fn: function(item /*{File|FileLikeObject}*/, options) {
                    return this.queue.length < 10;
                }
            });

            // CALLBACKS

            uploader.onWhenAddingFileFailed = function(item /*{File|FileLikeObject}*/, filter, options) {
                console.info('onWhenAddingFileFailed', item, filter, options);
            };
            uploader.onAfterAddingFile = function(fileItem) {
                console.info('onAfterAddingFile', fileItem);
            };
            uploader.onAfterAddingAll = function(addedFileItems) {
                console.info('onAfterAddingAll', addedFileItems);
            };
            uploader.onBeforeUploadItem = function(item) {
                console.info('onBeforeUploadItem', item);
            };
            uploader.onProgressItem = function(fileItem, progress) {
                console.info('onProgressItem', fileItem, progress);
            };
            uploader.onProgressAll = function(progress) {
                console.info('onProgressAll', progress);
            };
            uploader.onSuccessItem = function(fileItem, response, status, headers) {
                console.info('onSuccessItem', fileItem, response, status, headers);
            };
            uploader.onErrorItem = function(fileItem, response, status, headers) {
                console.info('onErrorItem', fileItem, response, status, headers);
            };
            uploader.onCancelItem = function(fileItem, response, status, headers) {
                console.info('onCancelItem', fileItem, response, status, headers);
            };
            uploader.onCompleteItem = function(fileItem, response, status, headers) {
                console.info('onCompleteItem', fileItem, response, status, headers);
            };
            uploader.onCompleteAll = function() {
                console.info('onCompleteAll');
            };

            console.info('uploader', uploader);
        };

        $scope.initController();
    }]);