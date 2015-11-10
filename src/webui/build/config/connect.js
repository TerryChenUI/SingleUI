"use strict";
var gulp = require('gulp')
var connect = require('gulp-connect')
var settings = require("../settings").settings

gulp.task('connect', [], function(){
	connect.server({
    	root: settings.folder.dist,
    	port: settings.ports.connect,
    	middleware: require('../../middleware'),
    	livereload: true
  	});
});