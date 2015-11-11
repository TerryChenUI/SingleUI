'use strict';
var gulp = require("gulp");
var dev_index = require("../config/index").dev_index;
var inject = require('gulp-inject');

var getNewPath = function (filePath, type) {
	var newPath = filePath.replace('/src/', '/');
    console.log('inject '+ type +' = '+ newPath);
    return newPath;
};

gulp.task('dev_index', [], function () {

    var target = gulp.src('./src/index.html');
    var cssSources = gulp.src(dev_index.src.css, { read : false });
    var jsSources = gulp.src(dev_index.src.js, { read : false });
    
    return target.pipe(inject(cssSources, {
            transform : function (filePath) {
                return '<link rel="stylesheet" type="text/css" href="' + getNewPath(filePath, 'css')  + '" />';
            }
        }))
        .pipe(inject(jsSources, {
            transform : function (filePath) {
                return '<script type="text/javascript" src="' + getNewPath(filePath, 'js')  + '"></script>';
            }
        }))
        .pipe(gulp.dest('./dist'));
});