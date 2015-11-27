"use strict";
var gulp = require('gulp'),
    concat = require('gulp-concat');

gulp.task('concat:js', ['contact:front_index', 'contact:admin_index']);

gulp.task('contact:front_index', function(){
    gulp.src(['src/app/app.js', 'src/app/**/*.js', '!src/app/**/*.spec.js', '!src/app/**/*.scenario.js'])
        .pipe(concat('app.js'))
        .pipe(gulp.dest('./dist'));
});

gulp.task('contact:admin_index', function(){
    gulp.src(['src/admin/app/app.js', 'src/admin/app/**/*.js', '!src/admin/app/**/*.spec.js', '!src/admin/app/**/*.scenario.js'])
        .pipe(concat('app.js'))
        .pipe(gulp.dest('./dist/admin'));
});