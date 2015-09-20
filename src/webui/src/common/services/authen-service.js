/**
 * Created by tchen on 2015/7/24.
 */

var AuthenService = (function(){
    function AuthenService($log, StateService, UserService) {
        this.$log = $log;
        this.StateService = StateService;
        this.UserService = UserService;
    }

    AuthenService.prototype.Login = function(userName, password){
        UserService.checkUserAuthen(userName, password, function(data){
           if(data.success){
               StateService.setCookie(userName, password, {expires : StateService.USER_EXPIRES});
           }
        });
    };

    AuthenService.prototype.Logout = function(userName){
        StateService.setCookie(userName);
    };

    AuthenService.prototype.IsAuthorize = function(userName){
        var value = StateService.getCookie(userName);
        if(value != null){
            return true;
        } else {
            return false;
        }
    };

    return AuthenService;
})();


angular.module('common.services')
    .factory('AuthenService', ['$log', 'StateService', 'UserService', function ($log, StateService, UserService) {
        return new AuthenService($log, StateService, UserService);
    }]);