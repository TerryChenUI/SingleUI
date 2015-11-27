'use strict';
var gulp = require("gulp"),
    inject = require('gulp-inject'),
    connect = require('gulp-connect'),
    config = require("../config/inject");

gulp.task('inject_index', ['sass:front_app'], function () {
    var filters = {
        "css": [
            {"pattern": "/dist/app.css", "replaceStr": "/app.css"}
        ],
        "js": [
            {"pattern": "/src/", "replaceStr": "/"}
        ]
    };
    executeTasks("./src/index.html", "./dist", config.dev_index, filters);
});

gulp.task('inject_admin_index', ['sass:admin_app'], function () {
    var filters = {
        "css": [
            {"pattern": "/src/plugins/", "replaceStr": "/plugins/"},
            {"pattern": "/dist/admin/", "replaceStr": "/admin/"}
        ],
        "js": [
            {"pattern": "/src/common/", "replaceStr": "../common/"},
            {"pattern": "/src/admin/", "replaceStr": "/admin/"}
        ]
    };
    executeTasks("./src/admin/index.html", "./dist/admin", config.dev_admin_index, filters);
});

gulp.task('inject_login', ['sass:admin_app'], function () {
    var filters = {
        "css": [
            {"pattern": "/src/plugins/", "replaceStr": "/plugins/"},
            {"pattern": "/dist/admin/", "replaceStr": "/admin/"}
        ],
        "js": [
            {"pattern": "/src/common/", "replaceStr": "../common/"},
            {"pattern": "/src/admin/", "replaceStr": "/admin/"}
        ]
    };
    executeTasks("./src/admin/login.html", "./dist/admin", config.dev_login, filters);
});


function executeTasks(sourceTpl, destFolder, configIndex, filters) {
    var target = gulp.src(sourceTpl);
    var cssSources = gulp.src(configIndex.src.css, {read: false});
    var jsSources = gulp.src(configIndex.src.js, {read: false});

    return target.pipe(inject(cssSources, {
        transform: function (filePath) {
            return '<link rel="stylesheet" type="text/css" href="' + getPath(filePath, filters.css) + '" />';
        }
    }))
        .pipe(inject(jsSources, {
            transform: function (filePath) {
                return '<script type="text/javascript" src="' + getPath(filePath, filters.js) + '"></script>';
            }
        }))
        .pipe(gulp.dest(destFolder))
        .pipe(connect.reload());
}

function getPath(filePath, filters) {
    for (var i = 0; i < filters.length; i++) {
        var filter = filters[i];
        if (filePath.match(filter.pattern)) {
            return filePath.replace(filter.pattern, filter.replaceStr);
        }
    }
    return filePath;
}