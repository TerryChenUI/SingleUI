/**
 * Created by tchen on 7/2/2015.
 */
'use strict';
module.exports = {
    dist_css: {
        src: [
            '<%= directory.src %>/**/*.css',
            '!<%= directory.src %>/admin/**/*.css'
        ],
        dest: '<%= directory.dist %>/app.css'
    },
    dist_js: {
        src: [
            '<%= directory.src %>/**/*.js',
            '!<%= directory.src %>/admin/**/*.js'
        ],
        dest: '<%= directory.dist %>/app.js'
    },
    dist_admin_css: {
        src: ['<%= directory.src %>/admin/**/*.css'],
        dest: '<%= directory.dist %>/admin/app.css'
    },
    dist_admin_js: {
        src: [
            '<%= directory.src %>/admin/**/*.js',
            '!<%= directory.src %>/admin/assets/*.js'
        ],
        dest: '<%= directory.dist %>/admin/app.js'
    }
};

