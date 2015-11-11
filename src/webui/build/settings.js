"use strict";

module.exports = {
    settings: {
        folder: {
            src: "src",
            dist: "dist"
        },
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
                    'lib/ng-file-upload/**.*',
                    'lib/jquery/dist/**',
                    'lib/ng-tasty/**',
                    'lib/underscore/**',
                    'lib/bootstrap/**'
                ],
                src: ['src/**', '!src/index.html', '!src/admin/index.html', '!src/admin/login.html'],
                css: ['src/**/*.css', '!src/admin/**/*.css'],
                js: ['src/**/*.js', '!src/admin/**/*.js'],
                index: 'src/index.html'
            },
            dist: {
                src: 'dist/',
                lib: 'dist/lib/'
            }
        },
        ports: {
            livereload: 35729,
            connect: 8000
        }
    }
};