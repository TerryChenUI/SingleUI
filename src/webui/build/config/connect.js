"use strict";
var gulp = require('gulp'),
    connect = require('gulp-connect'),
    webserver = require('gulp-webserver');

	gulp.task('connect', [], function () {
	    connect.server({
	        root: 'dist',
	        port: 8000,
	        livereload: true,
	        middleware: require('../../middleware')
	    });
	});

	gulp.task('webserver', function() {
		gulp.src('dist')
		.pipe(webserver({
			port:8000,
			livereload: true,
			directoryListing: {
				enable : true,
				path : 'dist'
			},
			open: true,
			middleware: require('../../middleware')
		}));
	});