"use strict";
var gulp = require("gulp");

gulp.task("prod", [
    'clean',
    'copy:lib',
    'copy:plugins',
    'copy:assets',
    'inject_index',
    'inject_admin_index',
    'inject_login'
]);