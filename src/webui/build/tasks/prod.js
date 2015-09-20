/**
 * Created by tchen on 7/2/2015.
 */
'use strict';
module.exports = function(grunt) {
    grunt.registerTask('prod',
        [
            'clean',
            'copy:dev_lib',
            //'copy:prod_front',
            //'copy:prod_admin',
            'concat',
            'cssmin',
            'uglify',
            'index:prod_index',
            'index:prod_admin_index',
            'cacheBust'
        ]);
};