angular.module('app.admin.content')
    .controller('ListCategoryCtrl', ['$scope', 'CategoryService', function ($scope, CategoryService) {

        var actionParams = {
            parentId: 0
        };
        $scope.categoryOptions = [{name: '--所有--', value: 0}];
        CategoryService.getCategories(actionParams).then(function (response) {
            _.each(response.data, function (data) {
                $scope.categoryOptions.push({
                    name: data.Name,
                    value: data.Id
                });
            });
        });

        $scope.filterBy = {
            'ParentId': 0
        };

        $scope.getResource = function (params, paramsObj) {
            paramsObj.count = 2;
            return CategoryService.getCategories(paramsObj).then(function (response) {
                response.data.rows = _.each(response.data.rows, function (data) {
                    data.EnabledText = data.Enabled ? "已启用" : "禁用";
                    if (data.ParentId == 0) {
                        data.ParentName = "父类别"
                    } else {
                        CategoryService.getCategoryById(data.ParentId).then(function (response) {
                            data.ParentName = response.Name;
                        });
                    }
                });
                return {
                    'rows': response.data.rows,
                    'header': [],
                    'pagination': response.data.pagination,
                    'sortBy': '',
                    'sortOrder': ''
                }
            });
        };

        $scope.remove = function (id) {
            if (confirm("Are you sure to delete the data?")) {
                CategoryService.deleteCategory(id, function () {
                    alert("Delete successfully");
                });
            }
        };

    }])
    .controller('EditCategoryCtrl', ['$scope', '$stateParams', '$state', 'CategoryService', function ($scope, $stateParams, $state, CategoryService) {
        var id = ($stateParams.id) ? parseInt($stateParams.id) : 0;
        $scope.category = {};
        $scope.title = id > 0 ? '编辑类别' : '添加类别';
        $scope.categoryOptions = [{name: '--父类别--', value: 0}];

        $scope.initController = function () {
            var actionParams = {
                parentId: 0
            };
            CategoryService.getCategories(actionParams).then(function (response) {
                _.each(response.data, function (data) {
                    $scope.categoryOptions.push({
                        name: data.Name,
                        value: data.Id
                    });
                });
                $scope.category.ParentId = $scope.categoryOptions[0].value;
            });

            if (id > 0) {
                CategoryService.getCategoryById(id).then(function (data) {
                    $scope.category = data;
                });
            }
        };

        $scope.saveCategory = function () {
            if (id > 0) {
                CategoryService.updateCategory(id, $scope.category, function () {
                    alert("更新成功");
                });
            } else {
                CategoryService.insertCategory($scope.category, function () {
                    alert("新增成功");
                });
            }
        };

        $scope.initController();
    }]);