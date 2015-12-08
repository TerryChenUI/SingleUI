"use strict";
var gulp = require('gulp'),
    connect = require('gulp-connect'),
    args = require('yargs').argv,
    setting = require('../setting'),
    isProductVersion = args.env === 'production';

gulp.task('connect', function () {
    var option = {
        root: setting.dist,
        port: setting.connect.port.dev,
        livereload: true,
        middleware: require('../../middleware')
    };
    if (isProductVersion) {
        option.port = setting.connect.port.prod;
    }
    return connect.server(option);
});