"use strict"
var gulp = require("gulp"),
    watch = require('gulp-watch');

gulp.task('watch', [], function (cb) {
    gulp.watch("src/index.html", ["dev_index"]);
    gulp.watch("src/admin/index.html", ["dev_admin_index"]);
    gulp.watch("src/admin/login.html", ["dev_login"]);
    gulp.watch(['src/**/*.css'], ["dev_css"]);
    gulp.watch(['src/**/*.js'], ["dev_js"]);
    gulp.watch(['src/**/*.html'], ["dev_html"]);
});