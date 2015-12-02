"use strict";
var gulp = require('gulp'),
    connect = require('gulp-connect');

gulp.task('connect:dev', function () {
    return connect.server({
        root: 'dist',
        port: 8000,
        livereload: true,
        middleware: require('../../middleware')
    });
});

gulp.task('connect:prod', function () {
    return connect.server({
        root: 'dist',
        port: 0,
        middleware: require('../../middleware')
    });
});