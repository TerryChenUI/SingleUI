"use strict";
var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');

gulp.task('sass', ['sass_front', 'sass_admin'])

gulp.task('sass_front', function () {
  gulp.src(['./src/app/**/*.scss', './src/style/**/*.scss'])
  	.pipe(gulp.dest('./dist/admin/'))
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist'))
    .pipe(concat("./dist/app.css"));
});

gulp.task('sass_admin', function () {
  gulp.src('./src/admin/**/*.scss')
    .pipe(gulp.dest('./dist/admin/'))
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist/admin/'))
    .pipe(concat("./dist/admin/app.css"));
});