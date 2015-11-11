'use strict';
module.exports = {
    dev_index: {
        src: {
            css: [
                'lib/bootstrap/dist/css/bootstrap.css',
                'src/assets/css/style.css'
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
                'src/common/**/*.js'
            ]
        }
    },
    dev_admin_index: {
        src: [
            './dist/admin/assets/plugins/font-awesome/css/font-awesome.min.css',
            './dist/admin/../lib/bootstrap/dist/css/bootstrap.min.css',
            './dist/admin/assets/css/style-metronic.css',
            './dist/admin/assets/css/style.css',
            './dist/admin/assets/css/style-responsive.css',
            './dist/admin/assets/css/admin.main.css',
            './dist/admin/assets/css/admin.main-responsive.css',
            './dist/admin/assets/css/themes/default.css',

            './dist/admin/../lib/jquery/dist/jquery.js',
            './dist/admin/../lib/bootstrap/dist/js/bootstrap.min.js',
            './dist/admin/../lib/angular/angular.js',
            './dist/admin/../lib/angular-cookies/angular-cookies.min.js',
            './dist/admin/../lib/angular-ui-router/release/angular-ui-router.js',
            './dist/admin/../lib/ng-file-upload/ng-file-upload.js',
            //'./dist/admin/../lib/ng-tasty/ng-tasty.js',
            './dist/admin/../lib/ng-tasty/ng-tasty-tpls.js',
            './dist/admin/../lib/underscore/underscore.js',
            './dist/admin/app/app.js',
            './dist/admin/../common/**/*.js',
            './dist/admin/app/**/*.js'

        ],
        environment: 'admin'
    },
    prod_index: {
        src: [

        ]
    },
    prod_admin_index: {
        src: [

        ],
        environment: 'admin'
    }
};