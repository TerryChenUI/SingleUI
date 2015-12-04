'use strict';
var gulp = require('gulp'),
    server = require('karma').Server,
    args = require('yargs').argv,
    setting = require('../setting');

/**
 * Run test for debug
 */
gulp.task('karma:unit', function (done) {
    var karma = new server({
        singleRun: false,
        configFile: __dirname + setting.karma.unit
    }, done);
    karma.start();
});

gulp.task('karma:e2e', function (done) {
    var karma = new server({
        singleRun: false,
        configFile: __dirname + setting.karma.e2e
    }, done);
    karma.start();
});

/**
 * Run single test
 */
gulp.task('karma:unit_run', function (done) {
    var karma = new server({
        singleRun: true,
        configFile: __dirname + setting.karma.unit
    }, done);
    karma.start();
});

gulp.task('karma:e2e_run', function (done) {
    var karma = new server({
        singleRun: true,
        configFile: __dirname + setting.karma.e2e,
        proxies: {
            '/': 'http://localhost:' + setting.connect.port.prod + '/'
        }
    }, done);
    karma.start();
});