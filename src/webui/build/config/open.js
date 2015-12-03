"use strict";
var gulp = require('gulp'),
    open = require('gulp-open'),
    args = require('yargs').argv,
    isProductVersion = args.env === 'production';

gulp.task('open', function () {
    var option = {
        uri: 'http://localhost:8000',
        app: 'chrome'
    };
    if (isProductVersion) {
        option.uri = 'http://localhost:8001';
    }
    gulp.src('dist/index.html')
        .pipe(open(option));
});