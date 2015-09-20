/**
 * Created by tchen on 7/2/2015.
 */
'use strict';
module.exports = function(grunt) {
    grunt.registerTask('server',
        [
            'connect:server',
            'watch:none'
        ]);
};