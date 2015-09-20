/**
 * Created by tchen on 7/2/2015.
 */
'use strict';
module.exports = {
    compress: {
        files: {
            '<%= directory.dist %>/app.min.css': ['<%= directory.dist %>/app.css'],
            '<%= directory.dist %>/admin/app.min.css': ['<%= directory.dist %>/admin/app.css']
        }
    }
};
