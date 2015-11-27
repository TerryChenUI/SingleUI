'use strict';
var gulp = require("gulp"),
    dev_index = require("../config/index").dev_index,
    dev_admin_index = require("../config/index").dev_admin_index,
    dev_login = require("../config/index").dev_login,
    inject = require('gulp-inject'),
    connect = require('gulp-connect');

var getNewPath = function (filePath, pattern, replaceStr, type) {
    var newPath = filePath.replace(pattern, replaceStr);
    //console.log('inject ' + type + ' = ' + newPath);
    return newPath;
};

function executeTasks(sourceTpl, destFolder, configIndex, cssFilters, jsFilters) {
    var target = gulp.src(sourceTpl);
    var cssSources = gulp.src(configIndex.src.css, {read: false});
    var jsSources = gulp.src(configIndex.src.js, {read: false});

    return target.pipe(inject(cssSources, {
        transform: function (filePath) {
            var newPath = '';
            if (filePath.match('/dist/app.css')) {
                newPath = filePath.replace('/dist/app.css', '/app.css')
            } else {
                newPath = filePath.replace('/src/', '/');
            }
            return '<link rel="stylesheet" type="text/css" href="' + newPath + '" />';
        }
    }))
        .pipe(inject(jsSources, {
            transform: function (filePath) {
                return '<script type="text/javascript" src="' + getNewPath(filePath, '/src/', '/', 'js') + '"></script>';
            }
        }))
        .pipe(gulp.dest(destFolder))
}

gulp.task('dev_index', ['sass:front_app'], function () {
    var target = gulp.src('./src/index.html');
    var cssSources = gulp.src(dev_index.src.css, {read: false});
    var jsSources = gulp.src(dev_index.src.js, {read: false});

    return target.pipe(inject(cssSources, {
        transform: function (filePath) {
            var newPath = filePath;
            if (filePath.match('/dist/app.css')) {
                newPath = getNewPath(filePath, '/dist/app.css', '/app.css', 'css');
            } else {
                newPath = getNewPath(filePath, '/src/', '/', 'css');
            }
            return '<link rel="stylesheet" type="text/css" href="' + newPath + '" />';
        }
    }))
        .pipe(inject(jsSources, {
            transform: function (filePath) {
                return '<script type="text/javascript" src="' + getNewPath(filePath, '/src/', '/', 'js') + '"></script>';
            }
        }))
        .pipe(gulp.dest('./dist'))
});

gulp.task('dev_admin_index', ['sass:admin_app'], function () {
    var target = gulp.src('./src/admin/index.html');
    var cssSources = gulp.src(dev_admin_index.src.css);
    var jsSources = gulp.src(dev_admin_index.src.js);

    return target.pipe(inject(cssSources, {
        transform: function (filePath) {
            var newPath = filePath;
            if (filePath.match('/src/plugins/')) {
                newPath = getNewPath(filePath, '/src/plugins/', '/plugins/', 'css');
            } else {
                newPath = getNewPath(filePath, '/dist/admin/', '/admin/', 'css');
            }
            return '<link rel="stylesheet" type="text/css" href="' + newPath + '" />';
        }
    }))
        .pipe(inject(jsSources, {
            transform: function (filePath) {
                var newPath = filePath;
                if (filePath.match('/src/common/')) {
                    newPath = getNewPath(filePath, '/src/common/', '../common/', 'js');
                } else if (filePath.match('/src/admin/')) {
                    newPath = getNewPath(filePath, '/src/admin/', '/admin/', 'js');
                }
                return '<script type="text/javascript" src="' + newPath + '"></script>';
            }
        }))
        .pipe(gulp.dest('./dist/admin'))
        .pipe(connect.reload())
});

gulp.task('dev_login', ['sass:admin_app'], function () {

    var target = gulp.src('./src/admin/login.html');
    var cssSources = gulp.src(dev_login.src.css, {read: false});
    var jsSources = gulp.src(dev_login.src.js, {read: false});

    return target.pipe(inject(cssSources, {
        transform: function (filePath) {
            var newPath = filePath;
            if (filePath.match('/src/plugins/')) {
                newPath = getNewPath(filePath, '/src/plugins/', '/plugins/', 'css');
            } else {
                newPath = getNewPath(filePath, '/dist/admin/', '/admin/', 'css');
            }
            return '<link rel="stylesheet" type="text/css" href="' + newPath + '" />';
        }
    }))
        .pipe(inject(jsSources, {
            transform: function (filePath) {
                var newPath = filePath;
                if (filePath.match('/src/common/')) {
                    newPath = getNewPath(filePath, '/src/common/', '../common/', 'js');
                } else if (filePath.match('/src/admin/')) {
                    newPath = getNewPath(filePath, '/src/admin/', '/admin/', 'js');
                }
                return '<script type="text/javascript" src="' + newPath + '"></script>';
            }
        }))
        .pipe(gulp.dest('./dist/admin'))
        .pipe(connect.reload());
});