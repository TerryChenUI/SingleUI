"use strict";
var gulp = require('gulp'),
    open = require('gulp-open');

gulp.task('open:dev', function () {
    var option = {
        uri: 'http://localhost:8000',
        app: 'chrome'
    };
    gulp.src("./dist/index.html")
        .pipe(open(option));
});

gulp.task('open:prod', function () {
    var option = {
        uri: 'http://localhost:8001',
        app: 'chrome'
    };
    gulp.src("./dist/index.html")
        .pipe(open(option));
});