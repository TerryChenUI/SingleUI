"use strict";
var gulp = require("gulp");

gulp.task("default", [
	'dev', 
	'karma:unit', 
	'karma:e2e',
	'connect',
	'open',
	'watch'
	]);