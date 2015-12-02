"use strict";
var gulp = require("gulp");

gulp.task("server", [
    'connect:prod',
    'open:prod'
]);