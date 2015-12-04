"use strict";
var gulp = require('gulp'),
    templateCache = require('gulp-angular-templatecache'),
    rev = require('gulp-rev'),
    uglify = require('gulp-uglify'),
    gulpif = require('gulp-if'),
    args = require('yargs').argv,
    connect = require('gulp-connect'),
    isProductVersion = args.env === 'production';

gulp.task('templateCache', ['templateCache:front', 'templateCache:admin']);

gulp.task('templateCache:front', function () {
    return gulp.src(['src/app/**/*.tpl.html'])
        .pipe(templateCache('templates.js', {module: 'app.templates', standalone: true}))
        .pipe(gulpif(isProductVersion, uglify()))
        .pipe(gulpif(isProductVersion, rev()))
        .pipe(gulp.dest('dist'))
        .pipe(connect.reload());
});

gulp.task('templateCache:admin', function () {
    return gulp.src(['src/admin/**/*.tpl.html', 'src/admin/common/**/*.tpl.html'])
        .pipe(templateCache('templates.js', {module: 'app.admin.templates', standalone: true}))
        .pipe(gulpif(isProductVersion, uglify()))
        .pipe(gulpif(isProductVersion, rev()))
        .pipe(gulp.dest('dist/admin'))
        .pipe(connect.reload());
});