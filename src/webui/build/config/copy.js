"use strict";
var gulp = require("gulp"),
    connect = require('gulp-connect'),
    jshint = require('gulp-jshint');

gulp.task('copy', ['copy:lib', 'copy:plugins', 'copy:assets', 'copy:html', 'copy:scss', 'copy:js']);

gulp.task('copy:lib', function () {
    gulp.src('lib/**/*', {base: 'lib'})
        .pipe(gulp.dest('dist/lib/'));
});

gulp.task('copy:plugins', [], function () {
    gulp.src('src/plugins/**', {base: 'src'})
        .pipe(gulp.dest('dist/'))
});

gulp.task('copy:assets', [], function () {
    gulp.src('src/**/assets/**', {base: 'src'})
        .pipe(gulp.dest('dist/'))
});

gulp.task('copy:html', [], function () {
    gulp.src('src/**/*.tpl.html', {base: 'src'})
        .pipe(gulp.dest('dist/'))
        .pipe(connect.reload());
});

gulp.task('copy:scss', function () {
    gulp.src(['src/**/*.scss'], {base: 'src'})
        .pipe(gulp.dest('dist/'))
        .pipe(connect.reload());
});

gulp.task('copy:js', [], function () {
    gulp.src(['src/**/*.js', '!src/**/*.spec.js'], {base: 'src'})
        .pipe(gulp.dest('dist/'))
        .pipe(connect.reload());
});