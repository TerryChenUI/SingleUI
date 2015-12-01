'use strict';
module.exports = {
    dev_index: {
        src: {
            css: [
                'lib/bootstrap/css/bootstrap.css',
                'dist/app.css'
            ],
            js: [
                'lib/jquery/jquery.js',
                'lib/bootstrap/js/bootstrap.js',
                'lib/angular/angular.js',
                'lib/angular-ui-router/angular-ui-router.js',
                'lib/angular-bootstrap/ui-bootstrap.js',
                'lib/angular-bootstrap/ui-bootstrap-tpls.js',
                'lib/underscore/underscore.js',
                'src/app/app.js',
                'src/app/app.tpl.js',
                'src/app/**/*.js',
                'src/common/**/*.js',
                '!src/app/**/*.spec.js',
                '!src/app/**/*.scenario.js'
            ]
        }
    },
    dev_admin_index: {
        src: {
            css: [
                'src/plugins/font-awesome/css/font-awesome.css',
                'lib/bootstrap/css/bootstrap.css',
                'lib/sweetalert/sweetalert.css',
                'dist/admin/app.css'
            ],
            js: [
                'lib/jquery/jquery.js',
                'lib/bootstrap/js/bootstrap.js',
                'lib/angular/angular.js',
                'lib/angular-cookies/angular-cookies.js',
                'lib/angular-ui-router/angular-ui-router.js',
                'lib/ng-file-upload/ng-file-upload.js',
                'lib/ng-tasty/ng-tasty-tpls.js',
                'lib/underscore/underscore.js',
                'lib/sweetalert/sweetalert-dev.js',
                'lib/angular-breadcrumb/angular-breadcrumb.js',
                'src/admin/app/app.js',
                'src/admin/app/app.tpl.js',
                'src/admin/app/**/*.js',
                'src/common/**/*.js',
                '!src/app/**/*.spec.js',
                '!src/app/**/*.scenario.js'
            ]
        }
    },
    dev_login: {
        src: {
            css: [
                'src/plugins/font-awesome/css/font-awesome.css',
                'lib/bootstrap/css/bootstrap.css',
                'lib/sweetalert/sweetalert.css',
                'dist/admin/app.css'
            ],
            js: [
                'lib/jquery/jquery.js',
                'lib/bootstrap/js/bootstrap.js',
                'lib/angular/angular.js',
                'lib/angular-cookies/angular-cookies.js',
                'lib/angular-ui-router/angular-ui-router.js',
                'lib/ng-file-upload/ng-file-upload.js',
                'lib/ng-tasty/ng-tasty-tpls.js',
                'lib/underscore/underscore.js',
                'lib/sweetalert/sweetalert-dev.js',
                'lib/angular-breadcrumb/angular-breadcrumb.js',
                'src/admin/app/app.js',
                'src/admin/app/app.tpl.js',
                'src/admin/app/login/login.js',
                'src/common/**/*.js',
                '!src/app/**/*.spec.js',
                '!src/app/**/*.scenario.js'
            ]
        }
    },
    prod_index: {
        src: {
            css: [
                'lib/bootstrap/css/bootstrap.min.css',
                'dist/app.*.css'
            ],
            js: [
                'lib/jquery/jquery.min.js',
                'lib/bootstrap/js/bootstrap.min.js',
                'lib/angular/angular.min.js',
                'lib/angular-ui-router/angular-ui-router.min.js',
                'lib/angular-bootstrap/ui-bootstrap.min.js',
                'lib/angular-bootstrap/ui-bootstrap-tpls.min.js',
                'lib/underscore/underscore.min.js',
                'dist/app.*.js'
            ]
        }
    },
    prod_admin_index: {
        src: {
            css: [
                'src/plugins/font-awesome/css/font-awesome.css',
                'lib/bootstrap/css/bootstrap.css',
                'lib/sweetalert/sweetalert.css',
                'dist/admin/app.*.css'
            ],
            js: [
                'lib/jquery/jquery.js',
                'lib/bootstrap/js/bootstrap.js',
                'lib/angular/angular.js',
                'lib/angular-cookies/angular-cookies.js',
                'lib/angular-ui-router/angular-ui-router.js',
                'lib/ng-file-upload/ng-file-upload.js',
                'lib/ng-tasty/ng-tasty-tpls.js',
                'lib/underscore/underscore.js',
                'lib/sweetalert/sweetalert.js',
                'lib/angular-breadcrumb/angular-breadcrumb.js',
                'dist/admin/app/app.*.js'
            ]
        }
    },
    prod_login: {
        src: {
            css: [
                'src/plugins/font-awesome/css/font-awesome.css',
                'lib/bootstrap/css/bootstrap.css',
                'lib/sweetalert/sweetalert.css',
                'dist/admin/app.*.css'
            ],
            js: [
                'lib/jquery/jquery.js',
                'lib/bootstrap/js/bootstrap.js',
                'lib/angular/angular.js',
                'lib/angular-cookies/angular-cookies.js',
                'lib/angular-ui-router/angular-ui-router.js',
                'lib/ng-file-upload/ng-file-upload.js',
                'lib/ng-tasty/ng-tasty-tpls.js',
                'lib/underscore/underscore.js',
                'lib/sweetalert/sweetalert.js',
                'lib/angular-breadcrumb/angular-breadcrumb.js',
                'dist/admin/app/app.*.js'
            ]
        }
    }
};