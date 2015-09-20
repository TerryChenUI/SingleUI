/**
 * Created by tchen on 2015/7/24.
 */
var StateService = (function() {
    StateService.prototype.USER_EXPIRES = 7;

    function StateService() {
        this.stateBag = {};
    }

    StateService.prototype.setState = function(token, state) {
        if (state != null) {
            return this.stateBag[token] = $.extend({}, this.stateBag[token], state);
        } else {
            return delete this.stateBag[token];
        }
    };

    StateService.prototype.getState = function(token) {
        return this.stateBag[token];
    };

    StateService.prototype.clear = function() {
        return this.stateBag = {};
    };

    StateService.prototype.getCookie = function(key) {
        var value = $.cookie(key);
        if (value != null) {
            return angular.fromJson(value);
        } else {
            return value;
        }
    };

    StateService.prototype.setCookie = function(key, value, options) {
        if (value != null) {
            return $.cookie(key, angular.toJson(value), options);
        } else {
            return $.removeCookie(key);
        }
    };

    return StateService;

})();

angular.module('common.services')
    .factory('StateService', [function() {
        return new StateService();
    }
]);