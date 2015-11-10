"use strict";
var gulp = require("gulp");
var del = require("del");
var path = require("../settings").settings.clean.dist;

gulp.task("clean", [], function (cb) {
    del.sync(path);
});