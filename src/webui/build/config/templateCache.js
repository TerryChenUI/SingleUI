"use strict";
var gulp = require('gulp'),
    templateCache = require('gulp-angular-templatecache'),
    runSequence = require('run-sequence');

gulp.task('templateCache', function(cb){
	runSequence('templateCache:front_app', 'templateCache:admin_app', cb)
});

gulp.task('templateCache:front_app', function () {
    return gulp.src('src/app/**/*.tpl.html')
        .pipe(templateCache('app.tpl.js', { module:'templates', standalone:true }))
        .pipe(gulp.dest('dist/app'));
});

gulp.task('templateCache:admin_app', function () {
    return gulp.src('src/admin/**/*.tpl.html')
        .pipe(templateCache('app.tpl.js', { module:'templates', standalone:true }))
        .pipe(gulp.dest('dist/admin/app'));
});