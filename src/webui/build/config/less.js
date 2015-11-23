"use strict";
var gulp = require('gulp');
var less = require('gulp-less');
var concat = require('gulp-concat');

gulp.task('less', ['less_front', 'less_admin'])

gulp.task('less_front', function () {
  gulp.src(['./src/app/**/*.less', './src/style/**/*.less'])
    .pipe(less())
    .pipe(gulp.dest('./dist/'))
    .pipe(concat("./dist/app.css"));
});

gulp.task('less_admin', function () {
  gulp.src('./src/admin/**/*.less')
    .pipe(gulp.dest('./dist/admin/'))
    .pipe(less())
    .pipe(concat("./dist/admin/app.css"));
});