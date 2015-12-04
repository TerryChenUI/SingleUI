"use strict";
var gulp = require('gulp'),
    connect = require('gulp-connect'),
    jshint = require('gulp-jshint'),
    setting = require('../setting');

gulp.task('copy', ['copy:lib', 'copy:plugins', 'copy:assets', 'copy:js']);

gulp.task('copy:lib', function () {
    return gulp.src(setting.path.lib, {base: 'src'})
        .pipe(gulp.dest(setting.dest.lib));
});

gulp.task('copy:plugins', function () {
    gulp.src(setting.path.plugins, {base: 'src'})
        .pipe(gulp.dest(setting.dest.dist))
});

gulp.task('copy:assets', function () {
    gulp.src(setting.path.assets, {base: 'src'})
        .pipe(gulp.dest(setting.dest.dist))
});

//sass
//gulp.task('copy:sass', ['copy:sass_front', 'copy:sass_admin']);
//
//gulp.task('copy:sass_front', function () {
//    gulp.src(['src/**/*.scss', '!src/admin/**/*.scss'], {base: 'src'})
//        .pipe(gulp.dest('dist/'))
//        .pipe(connect.reload());
//});
//
//gulp.task('copy:sass_admin', function () {
//    gulp.src('src/admin/**/*.scss', {base: 'src/admin'})
//        .pipe(gulp.dest('dist/admin/'))
//        .pipe(connect.reload());
//});

//js
gulp.task('copy:js', ['copy:js_common', 'copy:js_front', 'copy:js_admin']);

gulp.task('copy:js_common', function () {
    gulp.src(setting.path.js.common, {base: 'src'})
        .pipe(gulp.dest(setting.dest.dist))
        .pipe(connect.reload());
});
gulp.task('copy:js_front', function () {
    gulp.src(setting.path.js.front, {base: 'src'})
        .pipe(gulp.dest(setting.dest.dist))
        .pipe(connect.reload());
});
gulp.task('copy:js_admin', function () {
    gulp.src(setting.path.js.admin, {base: 'src/admin'})
        .pipe(gulp.dest(setting.dest.admin))
        .pipe(connect.reload());
});
