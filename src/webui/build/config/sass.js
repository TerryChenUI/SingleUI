"use strict";
var gulp = require('gulp'),
    sass = require('gulp-sass'),
    concat = require('gulp-concat'),
    sourcemaps = require('gulp-sourcemaps');

gulp.task('sass', ['sass_front', 'sass_admin']);

gulp.task('sass:front_index', function (cb) {
    gulp.src('./src/app.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./dist/'))
        .on('end', cb);
});

gulp.task('sass:admin_index', function (cb) {
    gulp.src('./src/admin/app.scss')
        .pipe(sourcemaps.init())
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./dist/admin/'))
        .on('end', cb);
});