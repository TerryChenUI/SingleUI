"use strict";
var gulp = require("gulp"),
    jshint = require('gulp-jshint');

gulp.task("lint", function () {
    gulp.src(['src/app/*.js'])
        .pipe(jshint())
        .pipe(jshint.reporter("default"));
});