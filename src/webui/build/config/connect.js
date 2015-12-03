"use strict";
var gulp = require('gulp'),
    connect = require('gulp-connect'),
    args = require('yargs').argv,
    isProductVersion = args.env === 'production';

gulp.task('connect', function () {
    var option = {
        root: 'dist',
        port: 8000,
        livereload: true,
        middleware: require('../../middleware')
    };
    if (isProductVersion) {
        option.port = 8001;
        option.livereload = false;
    }
    return connect.server(option);
});