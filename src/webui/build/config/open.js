"use strict";
var gulp = require('gulp'),
    open = require('gulp-open'),
    args = require('yargs').argv,
    setting = require('../setting'),
    isProductVersion = args.env === 'production';

gulp.task('open', function () {
    var option = {
        uri: 'http://localhost:' + setting.connect.port.dev + '',
        app: 'chrome'
    };
    if (isProductVersion) {
        option.uri = 'http://localhost:' + setting.connect.port.prod;
    }
    gulp.src('dist/index.html')
        .pipe(open(option));
});