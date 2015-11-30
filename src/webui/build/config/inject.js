'use strict';
module.exports = {
    dev_index: {
        src: {
            css: [
                'lib/bootstrap/dist/css/bootstrap.css',
                'dist/app.css'
            ],
            js: [
                'lib/jquery/dist/jquery.js',
                'lib/bootstrap/dist/js/bootstrap.js',
                'lib/angular/angular.js',
                'lib/angular-ui-router/release/angular-ui-router.js',
                'lib/angular-bootstrap/ui-bootstrap.js',
                'lib/angular-bootstrap/ui-bootstrap-tpls.js',
                'lib/underscore/underscore.js',
                'src/app/app.js',
                'dist/app/app.tpl.js',
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
                'lib/bootstrap/dist/css/bootstrap.css',
                'lib/sweetalert/dist/sweetalert.css',
                'dist/admin/app.css'
            ],
            js: [
                'lib/jquery/dist/jquery.js',
                'lib/bootstrap/dist/js/bootstrap.js',
                'lib/angular/angular.js',
                'lib/angular-cookies/angular-cookies.js',
                'lib/angular-ui-router/release/angular-ui-router.js',
                'lib/ng-file-upload/ng-file-upload.js',
                'lib/ng-tasty/ng-tasty-tpls.js',
                'lib/underscore/underscore.js',
                'lib/sweetalert/dist/sweetalert.js',
                'lib/angular-breadcrumb/dist/angular-breadcrumb.js',
                'src/admin/app/app.js',
                'dist/admin/app/app.tpl.js',
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
                'lib/bootstrap/dist/css/bootstrap.css',
                'lib/sweetalert/dist/sweetalert.css',
                'dist/admin/app.css'
            ],
            js: [
                'lib/jquery/dist/jquery.js',
                'lib/bootstrap/dist/js/bootstrap.js',
                'lib/angular/angular.js',
                'lib/angular-cookies/angular-cookies.js',
                'lib/angular-ui-router/release/angular-ui-router.js',
                'lib/ng-file-upload/ng-file-upload.js',
                'lib/ng-tasty/ng-tasty-tpls.js',
                'lib/underscore/underscore.js',
                'lib/sweetalert/dist/sweetalert.js',
                'lib/angular-breadcrumb/dist/angular-breadcrumb.js',
                'src/admin/app/app.js',
                'dist/admin/app/app.tpl.js',
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
                'lib/bootstrap/dist/css/bootstrap.min.css',
                'dist/app.*.css'
            ],
            js: [
                'lib/jquery/dist/jquery.min.js',
                'lib/bootstrap/dist/js/bootstrap.min.js',
                'lib/angular/angular.min.js',
                'lib/angular-ui-router/release/angular-ui-router.min.js',
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
                'lib/bootstrap/dist/css/bootstrap.css',
                'lib/sweetalert/dist/sweetalert.css',
                'dist/admin/app.*.css'
            ],
            js: [
                'lib/jquery/dist/jquery.js',
                'lib/bootstrap/dist/js/bootstrap.js',
                'lib/angular/angular.js',
                'lib/angular-cookies/angular-cookies.js',
                'lib/angular-ui-router/release/angular-ui-router.js',
                'lib/ng-file-upload/ng-file-upload.js',
                'lib/ng-tasty/ng-tasty-tpls.js',
                'lib/underscore/underscore.js',
                'lib/sweetalert/dist/sweetalert.js',
                'lib/angular-breadcrumb/dist/angular-breadcrumb.js',
                'dist/admin/app/app.*.js'
            ]
        }
    },
    prod_login: {
        src: {
            css: [
                'src/plugins/font-awesome/css/font-awesome.css',
                'lib/bootstrap/dist/css/bootstrap.css',
                'lib/sweetalert/dist/sweetalert.css',
                'dist/admin/app.*.css'
            ],
            js: [
                'lib/jquery/dist/jquery.js',
                'lib/bootstrap/dist/js/bootstrap.js',
                'lib/angular/angular.js',
                'lib/angular-cookies/angular-cookies.js',
                'lib/angular-ui-router/release/angular-ui-router.js',
                'lib/ng-file-upload/ng-file-upload.js',
                'lib/ng-tasty/ng-tasty-tpls.js',
                'lib/underscore/underscore.js',
                'lib/sweetalert/dist/sweetalert.js',
                'lib/angular-breadcrumb/dist/angular-breadcrumb.js',
                'dist/admin/app/app.*.js'
            ]
        }
    }
};