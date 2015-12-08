'use strict';
var gulp = require("gulp"),
    inject = require('gulp-inject'),
    connect = require('gulp-connect'),
    libraries = require('./common'),
    setting = require('../setting');

var injectConfig = [
    {
        name: 'inject:dev_index',
        src: setting.html.index,
        dest: setting.dest.dist,
        config: {
            src: {
                css: libraries.front.css.concat([
                    'dist/app.css'
                ]),
                js: libraries.front.js.concat([
                    'src/app/app.js',
                    'dist/templates.js',
                    'src/app/**/*.js',
                    'src/common/**/*.js',
                    '!src/app/**/*.spec.js',
                    '!src/app/**/*.scenario.js'
                ])
            }
        },
        filters: {
            css: [
                {"pattern": "/dist", "replaceStr": ""}
            ],
            js: [
                {"pattern": "/src", "replaceStr": ""},
                {"pattern": "/dist", "replaceStr": ""}
            ]
        }
    },
    {
        name: 'inject:dev_admin_index',
        src: setting.html.admin_index,
        dest: setting.dest.admin,
        config: {
            src: {
                css: libraries.admin.css.concat([
                    'dist/admin/app.css'
                ]),
                js: libraries.admin.js.concat([
                    'src/admin/app/app.js',
                    'dist/admin/templates.js',
                    'src/admin/app/**/*.js',
                    'src/admin/common/**/*.js',
                    'src/common/**/*.js',
                    '!src/app/**/*.spec.js',
                    '!src/app/**/*.scenario.js'
                ])
            }
        },
        filters: {
            css: [
                {"pattern": "/src", "replaceStr": ""},
                {"pattern": "/dist", "replaceStr": ""}
            ],
            js: [
                {"pattern": "/src/common", "replaceStr": "../common"},
                {"pattern": "/src", "replaceStr": ""},
                {"pattern": "/dist", "replaceStr": ""}
            ]
        }
    },
    {
        name: 'inject:dev_login',
        src: setting.html.login,
        dest: setting.dest.admin,
        config: {
            src: {
                css: libraries.admin.css.concat([
                    'dist/admin/app.css'
                ]),
                js: libraries.admin.js.concat([
                    'src/admin/app/app.js',
                    'dist/admin/templates.js',
                    'src/admin/app/login/login.js',
                    'src/admin/common/**/*.js',
                    'src/common/**/*.js',
                    '!src/app/**/*.spec.js',
                    '!src/app/**/*.scenario.js'
                ])
            }
        },
        filters: {
            css: [
                {"pattern": "/src/plugins", "replaceStr": "/plugins"},
                {"pattern": "/dist", "replaceStr": ""}
            ],
            js: [
                {"pattern": "/src/common", "replaceStr": "../common"},
                {"pattern": "/src", "replaceStr": ""},
                {"pattern": "/dist", "replaceStr": ""}
            ]
        }
    },
    {
        name: 'inject:prod_index',
        src: setting.html.index,
        dest: setting.dest.dist,
        config: {
            src: {
                css: libraries.front.css.concat([
                    'dist/app-*.css'
                ]),
                js: libraries.front.js.concat([
                    'dist/app-*.js',
                    'dist/templates-*.js'
                ])
            }
        },
        filters: {
            css: [
                {"pattern": "/dist", "replaceStr": ""}
            ],
            js: [
                {"pattern": "/dist", "replaceStr": ""}
            ]
        }
    },
    {
        name: 'inject:prod_admin_index',
        src: setting.html.admin_index,
        dest: setting.dest.admin,
        config: {
            src: {
                css: libraries.admin.css.concat([
                    'dist/admin/app-*.css'
                ]),
                js: libraries.admin.js.concat([
                    'dist/admin/app-*.js',
                    'dist/admin/templates-*.js'
                ])
            }
        },
        filters: {
            css: [
                {"pattern": "/src/plugins/", "replaceStr": "/plugins/"},
                {"pattern": "/dist", "replaceStr": ""}
            ],
            js: [
                {"pattern": "/dist", "replaceStr": ""}
            ]
        }
    },
    {
        name: 'inject:prod_login',
        src: setting.html.login,
        dest: setting.dest.admin,
        config: {
            src: {
                css: libraries.admin.css.concat([
                    'dist/admin/app-*.css'
                ]),
                js: libraries.admin.js.concat([
                    'dist/admin/app-*.js',
                    'dist/admin/templates-*.js'
                ])
            }
        },
        filters: {
            css: [
                {"pattern": "/src/plugins/", "replaceStr": "/plugins/"},
                {"pattern": "/dist", "replaceStr": ""}
            ],
            js: [
                {"pattern": "/dist", "replaceStr": ""}
            ]
        }
    }
];

for (var i = 0; i < injectConfig.length; i++) {
    (function (i) {
        var task = injectConfig[i];
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

