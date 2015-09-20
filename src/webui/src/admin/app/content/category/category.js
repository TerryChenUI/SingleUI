/**
 * Created by tchen on 7/8/2015.
 */
angular.module('app.admin.content')
    .controller('ListCategoryCtrl', ['$scope', 'CategoryService', function ($scope, CategoryService) {

        $scope.initController = function () {
            CategoryService.getCategories().then(function (data) {
                $scope.categories = data;
            });
        };

        $scope.deleteCategory = function (id) {
            if (confirm("Are you sure to delete the data?")) {
                CategoryService.deleteCategory(id, function () {
                    alert("Delete successfully");
                });
            }
        };

        $scope.initController();

    }])
    .controller('EditCategoryCtrl', ['$scope', '$stateParams', '$state', 'CategoryService', function ($scope, $stateParams, $state, CategoryService) {
        var categoryId = ($stateParams.id) ? parseInt($stateParams.id) : 0;
        var original = {};
        $scope.category = {};
        $scope.title = categoryId > 0 ? '编辑类别' : '添加类别';
        $scope.categoryOptions = [{name: '--父类别--', value: 0}];

        $scope.initController = function () {
            CategoryService.getCategories().then(function (data) {
                for (var i = 0; i < data.length; i++) {
                    $scope.categoryOptions.push({
                        name: data[i].Name,
                        value: data[i].Id
                    });
                }
                $scope.category.ParentId = $scope.categoryOptions[0].value;
            });

            if (categoryId > 0) {
                CategoryService.getCategoryById(categoryId).then(function (data) {
                    $scope.category = data;
                    original = angular.copy(data);
                });
            }
        };

        $scope.saveCategory = function () {
            if (categoryId <= 0) {
                CategoryService.insertCategory($scope.category, function () {
                    alert("Add successfully");
                    $state.go('category');
                });
            } else {
                CategoryService.updateCategory(categoryId, $scope.category, function () {
                    alert("update successfully");
                    $state.go('category');
                });
            }
        };

        $scope.isClean = function() {
            return angular.equals(original, $scope.category);
        };

        $scope.initController();

    }]);