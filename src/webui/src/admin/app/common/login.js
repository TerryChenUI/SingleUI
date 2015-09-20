/**
 * Created by TerryChen on 2015/9/20.
 */
angular.module('app.admin.common')
    .controller('LoginCtrl', ["$scope", function ($scope) {
        $scope.Login = function(){
            var test1 = $scope.model.username;
            var test2 = $scope.model.password;
        };
    }]);