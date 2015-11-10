"use strict";
var gulp = require("gulp");
var path = require("../settings").settings.copy;

gulp.task('copy', ['dev_lib', 'dev_src'])

gulp.task('dev_lib', [], function(){
	gulp.src(path.dev.lib, {base: 'lib'})
    .pipe(gulp.dest(path.dist.lib))
});

gulp.task('dev_src', [], function(){
	gulp.src(path.dev.src, {base: 'src'})
    .pipe(gulp.dest(path.dist.src))
});

// gulp.task('css', [], function(){
// 	gulp.src(path.dev.css, {base: 'src'})
//     .pipe(gulp.dest(path.dist.src))
// });

// gulp.task('js', [], function(){
// 	gulp.src(path.dev.js, {base: 'src'})
//     .pipe(gulp.dest(path.dist.src))
// });

// gulp.task('index', [], function(){
// 	gulp.src(path.dev.index)
//     .pipe(gulp.dest(path.dist.src))
// });