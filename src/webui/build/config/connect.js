/**
 * Created by tchen on 7/2/2015.
 */
'use strict';
module.exports = {
    dev: {
        options: {
            localhost: 'localhost',
            base: '<%= directory.dist %>',
            livereload: true,
            middleware: require('../../middleware'),
            open: true,
            port: '<%= ports.connect %>',
            mockTimeout: 1000
        }
    },
    server: {
        options: {
            localhost: 'localhost',
            base: '<%= directory.dist %>',
            livereload: true,
            middleware: require('../../middleware'),
            open: true,
            port: '<%= ports.connect %>',
            mockTimeout: 1000
        }
    }
};


