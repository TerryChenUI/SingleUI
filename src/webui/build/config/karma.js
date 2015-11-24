'use strict';
var gulp = require('gulp');
var Server = require('karma').Server;

/**
 * Run test
 */
gulp.task('unit_run', function (done) {
    new Server({
        configFile: __dirname + '/../../test/config/unit.js'
    }, done).start();
});

gulp.task('e2e_run', function (done) {
    new Server({
        configFile: __dirname + '/../../test/config/e2e.js'
    }, done).start();
});