"use strict";
var gulp = require("gulp"),
    connect = require('gulp-connect'),
    jshint = require('gulp-jshint'),
    path = require("../settings").settings.copy;

gulp.task('copy', ['dev_lib', 'dev_assets', 'dev_html', 'dev_css', 'dev_js']);

gulp.task('dev_lib', [], function () {
    gulp.src(path.dev.lib, {base: 'lib'})
        .pipe(gulp.dest(path.dist.lib))
});

gulp.task('dev_assets', [], function () {
    gulp.src(path.dev.assets, {base: 'src'})
        .pipe(gulp.dest(path.dist.root))
        .pipe(connect.reload());
});

gulp.task('dev_html', [], function () {
    gulp.src(path.dev.html, {base: 'src'})
        .pipe(gulp.dest(path.dist.root))
        .pipe(connect.reload());
});

gulp.task('dev_css', [], function () {
    gulp.src(path.dev.css, {base: 'src'})
        .pipe(gulp.dest(path.dist.root))
        .pipe(connect.reload());
});

gulp.task('dev_js', ['lint'], function () {
    gulp.src(path.dev.js, {base: 'src'})
        .pipe(gulp.dest(path.dist.root))
        .pipe(connect.reload());
});