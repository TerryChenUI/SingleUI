'use strict';
var gulp = require("gulp");
var template = require('gulp-template');
var data = require('gulp-data');
var dev_index = require("../config/index").dev_index;

var filter = function (files, pattern) {
	return files.filter((function (file) {
		return file.match(pattern);
	}));
};

gulp.task('dev_index', [], function () {

	var dirRE = new RegExp("^./dist/", "g");

	//styles
	var styles = filter(dev_index.src, /\.css$/).map(function (file) {
		return file.replace(dirRE, "");
    });
	if ((styles != null) && styles.length !== 0) {
		console.log('styles:');
    }
    for (var i = 0; i < styles.length; i++) {
        console.log(styles[i]);
    }

    //scripts
    var scripts = filter(dev_index.src, /\.js$/).map(function (file) {
		return file.replace(dirRE, "");
    });
    if ((scripts != null) && scripts.length !== 0) {
    	console.log('scripts:');
    }
    for (var j = 0; j < scripts.length; j++) {
    	console.log(scripts[j]);
    }
    return gulp.src('./src/index.html')
        .pipe(data(function () {
            return {
    			styles: styles,
    			scripts: scripts
            };
        }))
        .pipe(template())
        .pipe(gulp.dest('./dist'));
});