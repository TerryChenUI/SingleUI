"use strict";
var gulp = require("gulp");

gulp.task("prod", [
    'clean',
    'copy:lib',
    'copy:plugins',
    'copy:assets',
    'concat:js',
    'templateCache',
    'inject:prod_index',
    'inject:prod_admin_index',
    'inject:prod_login'
]);