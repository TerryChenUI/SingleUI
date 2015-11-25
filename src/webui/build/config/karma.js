'use strict';
var gulp = require('gulp'),
    Server = require('karma').Server;

/**
 * Run test
 */
gulp.task('karma:unit', function (done) {
	var karma = new Server({
        singleRun: false,
        configFile: __dirname + '/../../test/config/unit.js'
    }, done);
    karma.start();
});

gulp.task('karma:e2e', function (done) {
    var karma = new Server({
        singleRun: false, 
        configFile: __dirname + '/../../test/config/e2e.js'
    }, done);
    karma.start();
});