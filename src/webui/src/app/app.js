/**
 * Created by tchen on 7/3/2015.
 */
'use strict';
angular.module('common.config', []);
angular.module('common.util', []);
angular.module('common.directives', []);
angular.module('common.services', ['common.config', 'common.util']);
angular.module('app.home', []);
angular.module('app.nav', []);
angular.module('app.article', ['ui.bootstrap', 'common.services']);

var app = angular.module('app', [
    'ui.router',
    'ui.bootstrap',
    'common.directives',
    'common.config',
    'common.util',
    'common.services',
    'app.home',
    'app.nav',
    'app.article',
    'templates'
]);

app.controller('AppCtrl', [function () {

}]);
