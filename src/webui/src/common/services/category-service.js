(function () {
    var CategoryService = (function () {
        function CategoryService($log, $http, ServerConfig, appHttp) {
            this.$log = $log;
            this.$http = $http;
            this.appHttp = appHttp;
            this.serviceEndpoint = ServerConfig.apiUrl;
        }

        CategoryService.prototype.getCategories = function () {
            var config = {
                method: 'GET',
                url: this.serviceEndpoint + "categories"
            };
            this.$log.debug('getCategories', config);
            return this.appHttp.request(config);
        };

        CategoryService.prototype.getCategoryById = function (id) {
            var config = {
                method: 'GET',
                url: this.serviceEndpoint + "categories/" + id
            };
            this.$log.debug('getCategoryById', config);
            return this.appHttp.request(config);
        };

        CategoryService.prototype.insertCategory = function (category, successCallback) {
            var config = {
                method: 'POST',
                url: this.serviceEndpoint + "categories",
                data: category
            };
            this.$log.debug('insertCategory', config);
            return this.$http(config).success(function (res) {
                return successCallback(res);
            });
        };

        CategoryService.prototype.updateCategory = function (id, category, successCallback) {
            var config = {
                method: 'PUT',
                url: this.serviceEndpoint + "categories/" + id,
                data: category
            };
            this.$log.debug('updateCategory', config);
            return this.$http(config).success(function (res) {
                return successCallback(res);
            });
        };

        CategoryService.prototype.deleteCategory = function (id, successCallback) {
            var config = {
                method: 'DELETE',
                url: this.serviceEndpoint + "categories/" + id
            };
            this.$log.debug('deleteCategory', config);
            return this.$http(config).success(function (res) {
                return successCallback(res);
            });
        };

        return CategoryService;
    })();


    angular.module('common.services')
        .factory('CategoryService', ['$log', '$http', 'ServerConfig', 'appHttp', function ($log, $http, ServerConfig, appHttp) {
            return new CategoryService($log, $http, ServerConfig, appHttp);
        }]);

})();