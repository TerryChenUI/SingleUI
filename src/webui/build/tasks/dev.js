"use strict";
var gulp = require("gulp");

gulp.task("dev", [
    'clean',
    'copy',
    'inject_index',
    'inject_admin_index',
    'inject_login'
]);