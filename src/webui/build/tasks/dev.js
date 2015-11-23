"use strict";
var gulp = require("gulp");

gulp.task("dev", ['clean', 'copy', 'sass', 'dev_index', 'dev_admin_index', 'dev_login', 'watch']);