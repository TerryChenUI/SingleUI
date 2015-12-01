"use strict";
var gulp = require("gulp"),
	runSequence = require('run-sequence');

gulp.task("dev", [
    'clean',
    'copy',
    'inject:dev_index',
    'inject:dev_admin_index',
    'inject:dev_login'
]);