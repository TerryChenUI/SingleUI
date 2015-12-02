"use strict";
var gulp = require('gulp'),
    templateCache = require('gulp-angular-templatecache');

gulp.task('templateCache', ['templateCache:front', 'templateCache:admin']);

gulp.task('templateCache:front', function () {
    return gulp.src('src/app/**/*.tpl.html')
        .pipe(templateCache('app.tpl.js', {module: 'templates', standalone: true}))
        .pipe(gulp.dest('dist/app'));
});

gulp.task('templateCache:admin', function () {
    return gulp.src('src/admin/**/*.tpl.html')
        .pipe(templateCache('app.tpl.js', {module: 'templates', standalone: true}))
        .pipe(gulp.dest('dist/admin/app'));
});