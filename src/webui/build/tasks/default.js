"use strict";
var gulp = require("gulp");

gulp.task("default", [
	'dev', 
	'karma:unit', 
	'karma:e2e',
	//'webserver', 
	'connect',
	'watch'
	]);