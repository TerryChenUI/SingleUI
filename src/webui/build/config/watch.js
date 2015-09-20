/**
 * Created by tchen on 7/2/2015.
 */
'use strict';
module.exports = {
    css: {
        files: [
            '<%= directory.src %>/**/*.css',
            '!<%= directory.src %>/admin/**/*.css'
        ],
        tasks: 'copy:css',
        options: {
            livereload: '<%= ports.livereload %>',
            nospawn: true
        }
    },
    js: {
        files: [
            '<%= directory.src %>/**/*.js',
            '!<%= directory.src %>/admin/**/*.js'
        ],
        tasks: 'copy:js',
        options: {
            livereload: '<%= ports.livereload %>',
            nospawn: true
        }
    },
    index: {
        files: '<%= directory.src %>/index.html',
        tasks: 'index:dev_index',
        options: {
            livereload: '<%= ports.livereload %>',
            nospawn: true
        }
    },
    admin_css: {
        files: '<%= directory.src %>/admin/**/*.css',
        tasks: 'copy:admin_css',
        options: {
            livereload: '<%= ports.livereload %>',
            nospawn: true
        }
    },
    admin_js: {
        files: '<%= directory.src %>/admin/**/*.js',
        tasks: 'copy:admin_js',
        options: {
            livereload: '<%= ports.livereload %>',
            nospawn: true
        }
    },
    admin_index: {
        files: '<%= directory.src %>/admin/index.html',
        tasks: 'index:dev_admin_index',
        options: {
            livereload: '<%= ports.livereload %>',
            nospawn: true
        }
    },
    tpl:{
        files: '<%= directory.src %>/**/*.tpl.html',
        tasks: 'copy:tpl',
        options: {
            livereload: '<%= ports.livereload %>',
            nospawn: true
        }
    },
    none: {
        files: 'none'
    }
};