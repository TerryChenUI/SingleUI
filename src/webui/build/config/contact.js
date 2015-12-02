"use strict";
var gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    rev = require('gulp-rev');

gulp.task('concat', ['contact:front', 'contact:admin']);

gulp.task('contact:front', function(){
    gulp.src(['src/app/app.js', 'src/app/**/*.js', 'src/common/**/*.js', '!src/app/**/*.spec.js', '!src/app/**/*.scenario.js'])
        .pipe(concat('app.js'))
        .pipe(uglify())
        .pipe(rev())
        .pipe(gulp.dest('./dist'));
});

gulp.task('contact:admin', function(){
    gulp.src(['src/admin/app/app.js', 'src/admin/app/**/*.js', 'src/common/**/*.js', '!src/admin/app/**/*.spec.js', '!src/admin/app/**/*.scenario.js'])
        .pipe(concat('app.js'))
        .pipe(uglify())
        .pipe(rev())
        .pipe(gulp.dest('./dist/admin'));
});

