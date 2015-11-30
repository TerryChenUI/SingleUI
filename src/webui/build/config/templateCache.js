"use strict";
var gulp = require('gulp'),
    templateCache = require('gulp-angular-templatecache');

gulp.task('templateCache', ['templateCache:index', 'templateCache:admin_index']);

gulp.task('templateCache:index', function () {
    return gulp.src('src/app/**/*.tpl.html')
        .pipe(templateCache('app.tpl.js', { module:'templates', standalone:true }))
        .pipe(gulp.dest('./dist'));
});

gulp.task('templateCache:admin_index', function () {
    return gulp.src('src/admin/**/*.tpl.html')
        .pipe(templateCache('app.tpl.js', { module:'templates', standalone:true }))
        .pipe(gulp.dest('./dist/admin'));
});