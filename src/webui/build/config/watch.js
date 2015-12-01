"use strict";
var gulp = require("gulp"),
    watch = require('gulp-watch'),
    Server = require('karma').Server;

gulp.task('watch', [], function (cb) {
    gulp.watch("src/index.html", ["inject:dev_index"]);
    gulp.watch("src/admin/index.html", ["inject:dev_admin_index"]);
    gulp.watch("src/admin/login.html", ["inject:dev_login"]);
    gulp.watch(['src/**/*.tpl.html'], ["copy:html"]);
    gulp.watch(['src/**/*.scss'], ["renderSass"]);
    gulp.watch(['src/**/*.js','!src/**/*.spec.js','!src/**/*.scenario.js'], ["copy:js"]);
    // gulp.watch(['./src/**/*.spec.js'], ['karma:unit']);
    // gulp.watch(['./src/**/*.scenario.js'], ['karma:e2e']);
});