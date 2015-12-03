"use strict";
var gulp = require('gulp'),
    connect = require('gulp-connect'),
    jshint = require('gulp-jshint');

gulp.task('copy', ['copy:lib', 'copy:plugins', 'copy:assets', 'copy:scss', 'copy:js']);

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

//scss
gulp.task('copy:scss', ['copy:scss_front', 'copy:scss_admin']);

gulp.task('copy:scss_front', function () {
    gulp.src(['src/**/*.scss', '!src/admin/**/*.scss'], {base: 'src'})
        .pipe(gulp.dest('dist/'))
        .pipe(connect.reload());
});

gulp.task('copy:scss_admin', function () {
    gulp.src(['src/admin/**/*.scss'], {base: 'src'})
        .pipe(gulp.dest('dist/admin/'))
        .pipe(connect.reload());
});

//js
gulp.task('copy:js', ['copy:js_front', 'copy:js_admin']);

gulp.task('copy:js_front', function () {
    gulp.src(['src/app/**/*.js', 'src/common/**/*.js', '!src/**/*.spec.js', '!src/**/*.scenario.js'], {base: 'src'})
        .pipe(gulp.dest('dist/'))
        .pipe(connect.reload());
});
gulp.task('copy:js_admin', function () {
    gulp.src(['src/admin/app/**/*.js', '!src/**/*.spec.js', '!src/**/*.scenario.js'], {base: 'src'})
        .pipe(gulp.dest('dist/'))
        .pipe(connect.reload());
});