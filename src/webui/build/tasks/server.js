"use strict";
var gulp = require("gulp");

gulp.task("server", [
    'prod',
    'connect',
    'open'
]);