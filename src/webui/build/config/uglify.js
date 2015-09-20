/**
 * Created by tchen on 7/2/2015.
 */
'use strict';
module.exports = {
    options: {
        compress: false,
        sourceMap: true
    },
    temp: {
        files: {
            '<%= directory.dist %>/app.min.js': ['<%= directory.dist %>/app.js'],
            '<%= directory.dist %>/admin/app.min.js': ['<%= directory.dist %>/admin/app.js']
        }
    }
};