"use strict";
var gulp = require('gulp'),
    templateCache = require('gulp-angular-templatecache'),
    rev = require('gulp-rev'),
    uglify = require('gulp-uglify'),
    gulpif = require('gulp-if'),
    args = require('yargs').argv,
    connect = require('gulp-connect'),
    setting = require('../setting'),
    isProductVersion = args.env === 'production';

gulp.task('templateCache', ['templateCache:front', 'templateCache:admin']);

gulp.task('templateCache:front', function () {
    return gulp.src(setting.templateCache.front.src)
        .pipe(templateCache(setting.templateCache.front.template, {
            module: setting.templateCache.front.module,
            standalone: true
        }))
        .pipe(gulpif(isProductVersion, uglify()))
        .pipe(gulpif(isProductVersion, rev()))
        .pipe(gulp.dest(setting.dest.dist))
        .pipe(connect.reload());
});

gulp.task('templateCache:admin', function () {
    return gulp.src(setting.templateCache.admin.src)
        .pipe(templateCache(setting.templateCache.admin.template, {
            module: setting.templateCache.admin.module,
            standalone: true
        }))
        .pipe(gulpif(isProductVersion, uglify()))
        .pipe(gulpif(isProductVersion, rev()))
        .pipe(gulp.dest(setting.dest.admin))
        .pipe(connect.reload());
});