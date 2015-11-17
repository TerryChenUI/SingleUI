"use strict";
var gulp = require("gulp"),
    del = require("del"),
    path = require("../settings").settings.clean;

gulp.task("clean", [], function (cb) {
    del.sync(path.dist);
});