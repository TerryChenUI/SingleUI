"use strict";
var gulp = require("gulp"),
    connect = require('gulp-connect'),
    jshint = require('gulp-jshint');

gulp.task('copy', ['copy:lib', 'copy:plugins', 'copy:assets', 'copy:html', 'copy:scss', 'copy:js'])

gulp.task('copy:lib', [], function () {
    gulp.src([
        'lib/angular/angular.js',
        'lib/angular-bootstrap/ui-bootstrap.js',
        'lib/angular-bootstrap/ui-bootstrap-tpls.js',
        'lib/angular-cookies/angular-cookies.js',
        'lib/angular-sweetalert/SweetAlert.min.js',
        'lib/ng-file-upload/ng-file-upload.js',
        'lib/ng-tasty/ng-tasty-tpls',
        'lib/underscore/dist/underscore.js'
        ], {base: 'lib'})
        .pipe(gulp.dest('dist/lib'));

    gulp.src('lib/angular-breadcrumb/dist/angular-breadcrumb.js')
        .pipe(gulp.dest('dist/lib/angular-breadcrumb/'));

    gulp.src('lib/angular-ui-router/release/angular-ui-router.js')
        .pipe(gulp.dest('dist/lib/angular-ui-router'));

    gulp.src('lib/bootstrap/dist/**')
        .pipe(gulp.dest('dist/lib/bootstrap'));

    gulp.src('lib/jquery/dist/jquery.js')
        .pipe(gulp.dest('dist/lib/jquery'));

    gulp.src('', {base: 'lib'})
        .pipe(gulp.dest('dist/lib'));

    gulp.src('lib/sweetalert/dist/**')
        .pipe(gulp.dest('dist/lib/sweetalert/'));

// 'lib/angular/**',
// 'lib/angular-cookies/**',
// 'lib/angular-ui-router/**',
// 'lib/angular-bootstrap/**',
// 'lib/ng-file-upload/**',
// 'lib/jquery/dist/**',
// 'lib/ng-tasty/**',
// 'lib/underscore/**',
// 'lib/bootstrap/**',
// 'lib/sweetalert/**',
// 'lib/angular-breadcrumb/**'

});

gulp.task('copy:plugins', [], function () {
    gulp.src('src/plugins/**', {base: 'src'})
        .pipe(gulp.dest('dist/'))
});

gulp.task('copy:assets', [], function () {
    gulp.src('src/**/assets/**', {base: 'src'})
        .pipe(gulp.dest('dist/'))
});

gulp.task('copy:html', [], function () {
    gulp.src('src/**/*.tpl.html', {base: 'src'})
        .pipe(gulp.dest('dist/'))
        .pipe(connect.reload());
});


gulp.task('copy:scss', function () {
    gulp.src(['src/**/*.scss'], {base: 'src'})
        .pipe(gulp.dest('dist/'))
        .pipe(connect.reload());
});

gulp.task('copy:js', [], function () {
    gulp.src(['src/**/*.js', '!src/**/*.spec.js'], {base: 'src'})
        .pipe(gulp.dest('dist/'))
        .pipe(connect.reload());
});