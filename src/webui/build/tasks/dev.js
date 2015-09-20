/**
 * Created by tchen on 7/2/2015.
 */
'use strict';
module.exports = function(grunt){
    grunt.registerTask('dev',
        [
            'clean',
            'copy:dev_lib',
            'copy:dev_src',
            'index:dev_index',
            'index:dev_admin_index'
        ]);
};