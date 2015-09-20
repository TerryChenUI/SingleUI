'use strict';
module.exports = function (grunt) {
    var directory = {
        src: 'src',
        dist: 'dist'
    };
    var path = require('path');
    return require('load-grunt-config')(grunt, {
        configPath: path.join(process.cwd(), 'build/config'),
        jitGrunt: {
            customTasksDir: 'build/tasks'
        },
        data: {
            meta: {
                banner: '/*\n' + ' <%= package.name %> - v<%= package.version %> - <%= grunt.template.today("yyyy-mm-dd") %>\n' + '*/\n'
            },
            ports: {
                livereload: 35729,
                connect: 9002
            },
            directory: directory
        }
    });
};
