"use strict";
var gulp = require('gulp'),
    setting = require('../setting');

gulp.task('watch', function () {
    gulp.watch(setting.html.index, ['inject:dev_index']);
    gulp.watch(setting.html.admin_index, ['inject:dev_admin_index']);
    gulp.watch(setting.html.login_index, ['inject:dev_login']);

    gulp.watch(setting.templateCache.front.src, ['templateCache:front']);
    gulp.watch(setting.templateCache.admin.src, ['templateCache:admin']);

    gulp.watch(setting.sass.front.watch, ['sass:front']);
    gulp.watch(setting.sass.admin.watch, ['sass:admin']);

    gulp.watch(setting.path.js.common, ['copy:js_common']);
    gulp.watch(setting.path.js.front, ['copy:js_front']);
    gulp.watch(setting.path.js.admin, ['copy:js_admin']);

    // gulp.watch(['./src/**/*.spec.js'], ['karma:unit']);
    // gulp.watch(['./src/**/*.scenario.js'], ['karma:e2e']);
});