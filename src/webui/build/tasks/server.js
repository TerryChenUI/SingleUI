"use strict";
var gulp = require("gulp"),
    runSequence = require('run-sequence').use(gulp);

/**
 * gulp server --env production
 */
gulp.task("server", function () {
    runSequence(
        ['prod'],
        ['connect', 'open']
    );
});