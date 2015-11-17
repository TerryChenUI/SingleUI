"use strict";
var gulp = require('gulp'),
    connect = require('gulp-connect'),
    server = require("../settings").settings.ports;

gulp.task('connect', [], function () {
    connect.server({
        root: server.root,
        port: server.connect,
        livereload: true,
        middleware: require('../../middleware')
    });
});