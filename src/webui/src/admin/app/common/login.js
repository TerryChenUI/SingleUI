/**
 * Created by TerryChen on 2015/9/20.
 */
angular.module('app.admin.common')
    .controller('LoginCtrl', ["$scope", "$window", "StateService", "AuthenService", function ($scope, $window, StateService, AuthenService) {

        $scope.Login = function () {
            AuthenService.Login($scope.model.username, $scope.model.password, function (res) {
                if (res.success) {
                    AuthenService.setCredentials($scope.model.username, $scope.model.password);
                    $window.location.href = "index.html";
                } else {
                    $scope.errorMessage = "用户名或密码错误";
                }
            });
        };
    }]);