"use strict";
var gulp = require('gulp'),
    sass = require('gulp-sass'),
    concat = require('gulp-concat'),
    sourcemaps = require('gulp-sourcemaps'),
    connect = require('gulp-connect');

gulp.task('sass', ['sass:front_app', 'sass:admin_app']);

gulp.task('renderSass', ['copy:scss'], function(){
    gulp.src('./src/app.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./dist/'))
        .pipe(connect.reload());

    gulp.src('./src/admin/app.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./dist/admin/'))
        .pipe(connect.reload());
});

gulp.task('sass:front_app', function (cb) {
    gulp.src('./src/app.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./dist/'))
        .on('end', cb);
});

gulp.task('sass:admin_app', function (cb) {
    gulp.src('./src/admin/app.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./dist/admin/'))
        .on('end', cb);
});