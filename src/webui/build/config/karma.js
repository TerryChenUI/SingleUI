'use strict';
var gulp = require('gulp'),
    server = require('karma').Server,
    libraries = require('./common'),
    _und = require('underscore'),
    setting = require('../setting');

var jsLibraries = _und.uniq(libraries.front.js.concat(libraries.admin.js));
var unitPath = '/../../test/config/unit.js';
var e2ePath = '/../../test/config/e2e.js';

/**
 * Run test for debug
 */
gulp.task('karma:unit', function (done) {
    var karma = new server({
        singleRun: false,
        files: jsLibraries.concat([
            './dist/app/app.js',
            './dist/templates.js',
            './dist/app/**/*.js',
            './dist/common/**/*.js',
            './dist/admin/app/app.js',
            './dist/admin/templates.js',
            './dist/admin/app/**/*.js',
            './dist/admin/common/**/*.js',
            './src/**/*.spec.js'
        ]),
        preprocessors: {
            './src/**/*.spec.js': 'coverage'
        },
        configFile: __dirname + unitPath
    }, done);
    karma.start();
});

gulp.task('karma:e2e', function (done) {
    var karma = new server({
        singleRun: false,
        configFile: __dirname + e2ePath
    }, done);
    karma.start();
});

/**
 * Run single test
 */
gulp.task('karma:unit_run', function (done) {
    var karma = new server({
        singleRun: true,
        files: jsLibraries.concat([
            './dist/app/app-*.js',
            './dist/templates-*.js',
            './dist/admin/app/app-*.js',
            './dist/admin/templates-*.js',
            './src/**/*.spec.js'
        ]),
        preprocessors: {
            './src/**/*.spec.js': 'coverage'
        },
        configFile: __dirname + unitPath
    }, done);
    karma.start();
});

gulp.task('karma:e2e_run', function (done) {
    var karma = new server({
        singleRun: true,
        configFile: __dirname + e2ePath,
        proxies: {
            '/': 'http://localhost:' + setting.connect.port.prod + '/'
        }
    }, done);
    karma.start();
});