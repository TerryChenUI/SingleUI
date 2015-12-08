"use strict";
var gulp = require('gulp'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    connect = require('gulp-connect'),
    minifyCss = require('gulp-minify-css'),
    rev = require('gulp-rev'),
    gulpif = require('gulp-if'),
    args = require('yargs').argv,
    setting = require('../setting'),
    isProductVersion = args.env === 'production';

gulp.task('sass', ['sass:front', 'sass:admin']);

gulp.task('sass:front', function () {
    gulp.src('src/app.scss')
        .pipe(gulpif(!isProductVersion, sourcemaps.init()))
        .pipe(sass().on('error', sass.logError))
        .pipe(gulpif(!isProductVersion, sourcemaps.write()))
        .pipe(gulpif(isProductVersion, minifyCss()))
        .pipe(gulpif(isProductVersion, rev()))
        .pipe(gulp.dest(setting.dest.dist))
        .pipe(connect.reload());
});

gulp.task('sass:admin', function () {
    gulp.src('src/admin/app.scss')
        .pipe(gulpif(!isProductVersion, sourcemaps.init()))
        .pipe(sass().on('error', sass.logError))
        .pipe(gulpif(!isProductVersion, sourcemaps.write()))
        .pipe(gulpif(isProductVersion, minifyCss()))
        .pipe(gulpif(isProductVersion, rev()))
        .pipe(gulp.dest(setting.dest.admin))
        .pipe(connect.reload());
});