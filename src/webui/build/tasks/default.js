"use strict";
var gulp = require("gulp"),
    runSequence = require('run-sequence');

gulp.task("default", [
    'dev',
    //'karma:unit',
    //'karma:e2e',
    'connect',
    'watch',
    'open'
]);

//gulp.task("default", ['dev'], function () {
//    runSequence('karma:unit', 'karma:e2e', 'connect', 'watch', 'open');
//});