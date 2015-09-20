/**
 * Created by tchen on 7/2/2015.
 */
'use strict';
angular.module('common.config', []);
angular.module('common.util', []);
angular.module('common.directives', []);
angular.module('common.services', ['common.config', 'common.util']);
angular.module('app.admin.layout', ['common.services']);
angular.module('app.admin.content', ['common.services']);


var appAdmin = angular.module('app.admin', [
    'ui.router',
    'common.services',
    'common.directives',
    'common.config',
    'common.util',
    'angularFileUpload',
    'app.admin.layout',
    'app.admin.content'
]);

appAdmin.controller('AppAdminCtrl', [function () {

}]);
