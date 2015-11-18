"use strict";
module.exports = {
    settings: {
        clean: {
            dist: [
                'dist/admin',
                'dist/app',
                'dist/assets',
                'dist/common',
                'dist/lib',
                'dist/index.html'
            ]
        },
        copy: {
            dev: {
                lib: [
                    'lib/angular/**',
                    'lib/angular-cookies/**',
                    'lib/angular-ui-router/**',
                    'lib/angular-bootstrap/**',
                    'lib/ng-file-upload/**',
                    'lib/jquery/dist/**',
                    'lib/ng-tasty/**',
                    'lib/underscore/**',
                    'lib/bootstrap/**',
                    'lib/sweetalert/**',
                    'lib/angular-breadcrumb/**'
                ],
                assets: ['src/**/assets/**'],
                css: ['src/**/*.css'],
                js: ['src/**/*.js'],
                html: ['src/**/*.html', '!src/index.html', '!src/admin/index.html', '!src/admin/login.html']
            },
            dist: {
                root: 'dist/',
                lib: 'dist/lib/'
            }
        },
        ports: {
            root: 'dist',
            livereload: 35729,
            connect: 8000
        }
    }
};