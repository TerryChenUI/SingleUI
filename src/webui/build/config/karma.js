'use strict';
var gulp = require('gulp'),
    Server = require('karma').Server;

/**
 * Run test
 */
gulp.task('karma:unit', function (done) {
    new Server({
        port: 9877,
        background: true,
        runnerPort: 9102,
        files: [
            './src/**/*.spec.js'
        ],
        preprocessors: {
            'test/**/*.spec.js': 'coverage',
        },
        configFile: __dirname + '/../../test/config/unit.js'
    }, done).start();
});

gulp.task('karma:e2e', function (done) {
    new Server({
        port: 9876,
        runnerPort: 9101,
        background: true,
        files: [
            './src/**/*.scenario.js'
        ],
        preprocessors: {
            'test/**/*.scenario.js': 'coverage'
        },
        proxies:{
            '/': 'http://localhost:8000/'
        },
        configFile: __dirname + '/../../test/config/e2e.js'
    }, done).start();
});