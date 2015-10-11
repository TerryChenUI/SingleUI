/**
 * Created by TerryChen on 2015/7/2.
 */
'use strict';
module.exports = {
    dev_index: {
        src: [
            './dist/lib/bootstrap/dist/css/bootstrap.css',
            './dist/styles/blog.css',
            './dist/lib/jquery/dist/jquery.js',
            './dist/lib/bootstrap/dist/js/bootstrap.js',
            './dist/lib/angular/angular.js',
            './dist/lib/angular-ui-router/release/angular-ui-router.js',
            './dist/lib/angular-bootstrap/ui-bootstrap.js',
            './dist/lib/angular-bootstrap/ui-bootstrap-tpls.js',
            './dist/lib/underscore/underscore.js',
            './dist/app/app.js',
            './dist/common/**/*.js',
            './dist/app/**/*.js'
        ]
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
            './dist/admin/../lib/angular/angular.js',
            './dist/admin/../lib/angular-cookies/angular-cookies.min.js',
            './dist/admin/../lib/angular-ui-router/release/angular-ui-router.js',
            './dist/admin/../lib/angular-bootstrap/ui-bootstrap.js',
            './dist/admin/../lib/angular-bootstrap/ui-bootstrap-tpls.js',
            './dist/admin/../lib/underscore/underscore.js',
            './dist/admin/../lib/bootstrap/dist/js/bootstrap.min.js',

            './dist/admin/app/app.js',
            './dist/admin/../common/**/*.js',
            './dist/admin/app/**/*.js'

        ],
        environment: 'admin'
    },
    prod_index: {
        src: [
            './dist/lib/bootstrap/dist/css/bootstrap.min.css',
            './dist/app.min.css',
            './dist/lib/jquery/dist/jquery.min.js',
            './dist/lib/bootstrap/dist/js/bootstrap.min.js',
            './dist/lib/angular/angular.min.js',
            './dist/lib/angular-ui-router/release/angular-ui-router.min.js',
            './dist/lib/angular-bootstrap/ui-bootstrap.min.js',
            './dist/lib/angular-bootstrap/ui-bootstrap-tpls.min.js',
            './dist/lib/underscore/underscore-min.js',
            './dist/app.min.js'
        ]
    },
    prod_admin_index: {
        src: [

        ],
        environment: 'admin'
    }
};