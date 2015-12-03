"use strict";
var gulp = require("gulp"),
    watch = require('gulp-watch'),
    Server = require('karma').Server;

gulp.task('watch', function () {
    gulp.watch("src/index.html", ["inject:dev_index"]);
    gulp.watch("src/admin/index.html", ["inject:dev_admin_index"]);
    gulp.watch("src/admin/login.html", ["inject:dev_login"]);

    gulp.watch('src/app/**/*.tpl.html', ["templateCache:front"]);
    gulp.watch('src/admin/app/**/*.tpl.html', ["templateCache:admin"]);
    
    gulp.watch(['src/**/*.scss', '!src/admin/**/*.scss'], ["sass:front"]);
    gulp.watch('src/admin/**/*.scss', ["sass:admin"]);
    
    gulp.watch(['src/app/**/*.js', 'src/common/**/*.js', '!src/**/*.spec.js', '!src/**/*.scenario.js'], ["copy:js_front"]);
    gulp.watch(['src/admin/app/**/*.js', '!src/**/*.spec.js', '!src/**/*.scenario.js'], ["copy:js_admin"]);
    
    // gulp.watch(['./src/**/*.spec.js'], ['karma:unit']);
    // gulp.watch(['./src/**/*.scenario.js'], ['karma:e2e']);
});