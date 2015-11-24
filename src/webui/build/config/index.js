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
                'src/app/**/*.js',
                '!src/app/**/*.spec.js',
                'src/common/**/*.js'
            ]
        }
    },
    dev_admin_index: {
        src: {
            css: [
                'src/plugins/font-awesome/css/font-awesome.min.css',
                'lib/bootstrap/dist/css/bootstrap.min.css',
                'lib/sweetalert/dist/sweetalert.css',
                'dist/admin/app.css'
            ],
            js: [
                'lib/jquery/dist/jquery.js',
                'lib/bootstrap/dist/js/bootstrap.min.js',
                'lib/angular/angular.js',
                'lib/angular-cookies/angular-cookies.min.js',
                'lib/angular-ui-router/release/angular-ui-router.js',
                'lib/ng-file-upload/ng-file-upload.js',
                'lib/ng-tasty/ng-tasty-tpls.js',
                'lib/underscore/underscore.js',
                'lib/sweetalert/dist/sweetalert.min.js',
                'lib/angular-breadcrumb/dist/angular-breadcrumb.js',
                'src/admin/app/app.js',
                'src/admin/app/**/*.js',
                '!src/admin/app/**/*.spec.js',
                'src/common/**/*.js'
            ]
        }
    },
    dev_login: {
        src: {
            css: [
                'src/plugins/font-awesome/css/font-awesome.min.css',
                'lib/bootstrap/dist/css/bootstrap.min.css',
                'src/admin/styles/style-metronic.css',
                'src/admin/styles/style.css',
                'src/admin/styles/style-responsive.css',
                'src/admin/styles/themes/default.css',
                'src/admin/styles/login.css'
            ],
            js: [
                'lib/jquery/dist/jquery.js',
                'lib/bootstrap/dist/js/bootstrap.min.js',
                'lib/angular/angular.js',
                'lib/angular-cookies/angular-cookies.min.js',
                'lib/angular-ui-router/release/angular-ui-router.js',
                'lib/ng-file-upload/ng-file-upload.js',
                'lib/ng-tasty/ng-tasty-tpls.js',
                'lib/underscore/underscore.js',
                'src/admin/app/app.js',
                'src/admin/app/login/login.js',
                'src/common/**/*.js'
            ]
        }
    },
    prod_index: {
        src: []
    },
    prod_admin_index: {
        src: []
    }
};