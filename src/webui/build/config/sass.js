"use strict";
var gulp = require('gulp'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    connect = require('gulp-connect'),
    minifyCss = require('gulp-minify-css'),
    rev = require('gulp-rev'),
    gulpif = require('gulp-if'),
    runSequence = require('run-sequence').use(gulp),
    args = require('yargs').argv,
    isProductVersion = args.env === 'production';

gulp.task('renderSass', function () {
    runSequence('copy:scss', ['sass:front_app', 'sass:admin_app'])
});

gulp.task('sass', ['sass:front_app', 'sass:admin_app']);

gulp.task('sass:front_app', function () {
    console.log(isProductVersion);
    gulp.src('src/app.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(sourcemaps.write())
        .pipe(gulpif(isProductVersion, rev()))
        .pipe(gulpif(isProductVersion, minifyCss()))
        .pipe(gulp.dest('dist/'))
        .pipe(connect.reload());
});

gulp.task('sass:admin_app', function () {
    gulp.src('src/admin/app.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(sourcemaps.write())
        .pipe(gulpif(isProductVersion, rev()))
        .pipe(gulpif(isProductVersion, minifyCss()))
        .pipe(gulp.dest('dist/admin/'))
        .pipe(connect.reload());
});