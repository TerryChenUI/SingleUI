"use strict";
var gulp = require("gulp"),
    runSequence = require('run-sequence').use(gulp);

gulp.task("default", function () {
    runSequence(
        ['dev'],
        ['connect:dev', 'open', 'watch'],
        ['karma:unit', 'karma:e2e']
    );
});