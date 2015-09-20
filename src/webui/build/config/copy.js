/**
 * Created by tchen on 7/2/2015.
 */
'use strict';
module.exports = {
    dev_lib: {
        files: [
            {
                cwd: 'lib',
                src: [
                    'angular/**',
                    'angular-ui-router/**',
                    'angular-bootstrap/**',
                    'jquery/dist/**',
                    'underscore/**',
                    'bootstrap/**'
                ],
                dest: '<%= directory.dist %>/lib/',
                expand: true
            }
        ]
    },
    prod_lib: {
        files: [
            {
                cwd: 'lib',
                src: [
                    'angular/**',
                    'angular-ui-router/**',
                    'angular-bootstrap/**',
                    'jquery/dist/**',
                    'underscore/**',
                    'bootstrap/**'
                ],
                dest: '<%= directory.dist %>/lib/',
                expand: true
            }
        ]
    },
    dev_src: {
        files: [
            {
                cwd: '<%= directory.src %>',
                src: ['**'],
                dest: '<%= directory.dist %>',
                expand: true
            }
        ]
    },
    css: {
        files: [
            {
                cwd: '<%= directory.src %>',
                src: [
                    '**/*.css',
                    '!admin/**/*.css'
                ],
                dest: '<%= directory.dist %>',
                expand: true
            }
        ]
    },
    js: {
        files: [
            {
                cwd: '<%= directory.src %>',
                src: [
                    '**/*.js',
                    '!admin/app/**/*.js'
                ],
                dest: '<%= directory.dist %>',
                expand: true
            }
        ]
    },
    index: {
        files: [
            {
                cwd: '<%= directory.src %>',
                src: 'index.html',
                dest: '<%= directory.dist %>',
                expand: true
            }
        ]
    },
    admin_css: {
        files: [
            {
                cwd: '<%= directory.src %>',
                src: 'admin/**/*.css',
                dest: '<%= directory.dist %>',
                expand: true
            }
        ]
    },
    admin_js: {
        files: [
            {
                cwd: '<%= directory.src %>',
                src: 'admin/app/**/*.js',
                dest: '<%= directory.dist %>',
                expand: true
            }
        ]
    },
    admin_index: {
        files: [
            {
                cwd: '<%= directory.src %>',
                src: 'admin/index.html',
                dest: '<%= directory.dist %>',
                expand: true
            }
        ]
    },
    tpl: {
        files: [
            {
                cwd: '<%= directory.src %>',
                src: ['**/*.tpl.html'],
                dest: '<%= directory.dist %>',
                expand: true
            }
        ]
    }
};