'use strict';
var gulp = require('gulp'),
    Server = require('karma').Server,
    setting = require('../setting');

/**
 * Run test
 */
gulp.task('karma:unit', function (done) {
    var karma = new Server({
        singleRun: false,
        configFile: __dirname + setting.karma.unit
    }, done);
    karma.start();
});

gulp.task('karma:e2e', function (done) {
    var karma = new Server({
        singleRun: false,
        configFile: __dirname + setting.karma.e2e
    }, done);
    karma.start();
});