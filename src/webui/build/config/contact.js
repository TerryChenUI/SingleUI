"use strict";
var gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    rev = require('gulp-rev'),
    setting = require('../setting');

gulp.task('concat', ['contact:front', 'contact:admin']);

gulp.task('contact:front', function(){
    return gulp.src(setting.contact.front.src)
        .pipe(concat(setting.contact.front.app))
        .pipe(uglify())
        .pipe(rev())
        .pipe(gulp.dest(setting.dest.dist));
});

gulp.task('contact:admin', function(){
    return gulp.src(setting.contact.admin.src)
        .pipe(concat(setting.contact.admin.app))
        .pipe(uglify())
        .pipe(rev())
        .pipe(gulp.dest(setting.dest.admin));
});

