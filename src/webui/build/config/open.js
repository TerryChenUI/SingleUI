"use strict";
var gulp = require('gulp'),
    open = require('gulp-open');

gulp.task('open', function () {
    gulp.src("./dist/index.html")
        .pipe(open({
            uri: 'http://localhost:8000',
            app: 'chrome'
        })
    );
});