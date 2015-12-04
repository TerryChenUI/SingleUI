'use strict';
var gulp = require("gulp"),
    inject = require('gulp-inject'),
    connect = require('gulp-connect'),
    setting = require('../setting');

for (var i = 0; i < setting.inject.length; i++) {
    (function (i) {
        var task = setting.inject[i];

        gulp.task(task.name, function () {
            var target = gulp.src(task.src);
            var cssSources = gulp.src(task.config.src.css, {read: false});
            var jsSources = gulp.src(task.config.src.js, {read: false});

            return target.pipe(inject(cssSources, {
                transform: function (filePath) {
                    return '<link rel="stylesheet" type="text/css" href="' + getPath(filePath, task.filters.css) + '" />';
                }
            }))
                .pipe(inject(jsSources, {
                    transform: function (filePath) {
                        return '<script type="text/javascript" src="' + getPath(filePath, task.filters.js) + '"></script>';
                    }
                }))
                .pipe(gulp.dest(task.dest))
                .pipe(connect.reload());
        });

        function getPath(filePath, filters) {
            for (var i = 0; i < filters.length; i++) {
                var filter = filters[i];
                if (filePath.match(filter.pattern)) {
                    return filePath.replace(filter.pattern, filter.replaceStr);
                }
            }
            return filePath;
        }
    })(i);
}

