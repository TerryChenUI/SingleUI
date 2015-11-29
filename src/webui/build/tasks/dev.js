"use strict";
var gulp = require("gulp");

gulp.task("dev", [
    'clean',
    'copy',
    'templateCache',
    'inject:dev_index',
    'inject:dev_admin_index',
    'inject:dev_login'
]);