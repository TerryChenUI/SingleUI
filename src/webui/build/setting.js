"use strict";
module.exports = {
    dist: 'dist',
    dest: {
        dist: 'dist/',
        lib: 'dist/lib/',
        admin: 'dist/admin/'
    },
    path: {
        lib: 'lib/**/*',
        plugins: 'src/plugins/**',
        assets: 'src/**/assets/**',
        js: {
            common: ['src/common/**/*.js', '!src/**/*.spec.js', '!src/**/*.scenario.js'],
            front: ['src/app/**/*.js', '!src/**/*.spec.js', '!src/**/*.scenario.js'],
            admin: ['src/admin/app/**/*.js', 'src/admin/common/**/*.js', '!src/**/*.spec.js', '!src/**/*.scenario.js']
        }
    },
    clean: ['dist', 'test_out'],
    contact: {
        front: {
            src: ['src/app/app.js', 'src/app/**/*.js', 'src/common/**/*.js', '!src/app/**/*.spec.js', '!src/app/**/*.scenario.js'],
            app: 'app.js'
        },
        admin: {
            src: ['src/admin/app/app.js', 'src/admin/app/**/*.js', 'src/common/**/*.js', 'src/admin/common/**/*.js', '!src/admin/app/**/*.spec.js', '!src/admin/app/**/*.scenario.js'],
            app: 'app.js'
        }
    },
    karma: {
        unit: '/../../test/config/unit.js',
        e2e: '/../../test/config/e2e.js'
    },
    open: {
        src: 'dist/index.html',
        browser: 'chrome'
    },
    sass: {
        front: {
            src: 'src/app.scss',
            watch: ['src/**/*.scss', '!src/admin/**/*.scss']
        },
        admin: {
            src: 'src/admin/app.scss',
            watch: 'src/admin/**/*.scss'
        }
    },
    templateCache: {
        front: {
            src: 'src/app/**/*.tpl.html',
            template: 'templates.js',
            module: 'app.templates'
        },
        admin: {
            src: ['src/admin/**/*.tpl.html', 'src/admin/common/**/*.tpl.html'],
            template: 'templates.js',
            module: 'app.admin.templates'
        }
    },
    html: {
        index: 'src/index.html',
        admin_index: 'src/admin/index.html',
        login_login: 'src/admin/login.html'
    },
    connect: {
        port: {
            dev: 8000,
            prod: 8001
        }
    },
    inject: [
        {
            name: 'inject:dev_index',
            src: 'src/index.html',
            dest: 'dist/',
            config: {
                src: {
                    css: [
                        'lib/bootstrap/css/bootstrap.css',
                        'dist/app.css'
                    ],
                    js: [
                        'lib/jquery/jquery.js',
                        'lib/bootstrap/js/bootstrap.js',
                        'lib/angular/angular.js',
                        'lib/angular-ui-router/angular-ui-router.js',
                        'lib/angular-bootstrap/ui-bootstrap.js',
                        'lib/angular-bootstrap/ui-bootstrap-tpls.js',
                        'lib/underscore/underscore.js',
                        'src/app/app.js',
                        'dist/templates.js',
                        'src/app/**/*.js',
                        'src/common/**/*.js',
                        '!src/app/**/*.spec.js',
                        '!src/app/**/*.scenario.js'
                    ]
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
            src: 'src/admin/index.html',
            dest: 'dist/admin/',
            config: {
                src: {
                    css: [
                        'src/plugins/font-awesome/css/font-awesome.css',
                        'lib/bootstrap/css/bootstrap.css',
                        'lib/sweetalert/sweetalert.css',
                        'dist/admin/app.css'
                    ],
                    js: [
                        'lib/jquery/jquery.js',
                        'lib/bootstrap/js/bootstrap.js',
                        'lib/angular/angular.js',
                        'lib/angular-cookies/angular-cookies.js',
                        'lib/angular-ui-router/angular-ui-router.js',
                        'lib/ng-file-upload/ng-file-upload.js',
                        'lib/ng-tasty/ng-tasty-tpls.js',
                        'lib/underscore/underscore.js',
                        'lib/sweetalert/sweetalert-dev.js',
                        'lib/angular-breadcrumb/angular-breadcrumb.js',
                        'src/admin/app/app.js',
                        'dist/admin/templates.js',
                        'src/admin/app/**/*.js',
                        'src/admin/common/**/*.js',
                        'src/common/**/*.js',
                        '!src/app/**/*.spec.js',
                        '!src/app/**/*.scenario.js'
                    ]
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
            src: 'src/admin/login.html',
            dest: 'dist/admin/',
            config: {
                src: {
                    css: [
                        'src/plugins/font-awesome/css/font-awesome.css',
                        'lib/bootstrap/css/bootstrap.css',
                        'lib/sweetalert/sweetalert.css',
                        'dist/admin/app.css'
                    ],
                    js: [
                        'lib/jquery/jquery.js',
                        'lib/bootstrap/js/bootstrap.js',
                        'lib/angular/angular.js',
                        'lib/angular-cookies/angular-cookies.js',
                        'lib/angular-ui-router/angular-ui-router.js',
                        'lib/ng-file-upload/ng-file-upload.js',
                        'lib/ng-tasty/ng-tasty-tpls.js',
                        'lib/underscore/underscore.js',
                        'lib/sweetalert/sweetalert-dev.js',
                        'lib/angular-breadcrumb/angular-breadcrumb.js',
                        'src/admin/app/app.js',
                        'dist/admin/templates.js',
                        'src/admin/app/login/login.js',
                        'src/admin/common/**/*.js',
                        'src/common/**/*.js',
                        '!src/app/**/*.spec.js',
                        '!src/app/**/*.scenario.js'
                    ]
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
            src: 'src/index.html',
            dest: 'dist/',
            config: {
                src: {
                    css: [
                        'lib/bootstrap/css/bootstrap.min.css',
                        'dist/app-*.css'
                    ],
                    js: [
                        'lib/jquery/jquery.min.js',
                        'lib/bootstrap/js/bootstrap.min.js',
                        'lib/angular/angular.min.js',
                        'lib/angular-ui-router/angular-ui-router.min.js',
                        'lib/angular-bootstrap/ui-bootstrap.min.js',
                        'lib/angular-bootstrap/ui-bootstrap-tpls.min.js',
                        'lib/underscore/underscore-min.js',
                        'dist/app-*.js',
                        'dist/templates-*.js'
                    ]
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
            src: 'src/admin/index.html',
            dest: 'dist/admin/',
            config: {
                src: {
                    css: [
                        'src/plugins/font-awesome/css/font-awesome.css',
                        'lib/bootstrap/css/bootstrap.css',
                        'lib/sweetalert/sweetalert.css',
                        'dist/admin/app-*.css'
                    ],
                    js: [
                        'lib/jquery/jquery.min.js',
                        'lib/bootstrap/js/bootstrap.min.js',
                        'lib/angular/angular.min.js',
                        'lib/angular-cookies/angular-cookies.min.js',
                        'lib/angular-ui-router/angular-ui-router.min.js',
                        'lib/ng-file-upload/ng-file-upload.min.js',
                        'lib/ng-tasty/ng-tasty-tpls.min.js',
                        'lib/sweetalert/sweetalert.min.js',
                        'lib/angular-breadcrumb/angular-breadcrumb.js',
                        'lib/underscore/underscore-min.js',
                        'dist/admin/app-*.js',
                        'dist/admin/templates-*.js'
                    ]
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
            src: 'src/admin/login.html',
            dest: 'dist/admin/',
            config: {
                src: {
                    css: [
                        'src/plugins/font-awesome/css/font-awesome.css',
                        'lib/bootstrap/css/bootstrap.css',
                        'lib/sweetalert/sweetalert.css',
                        'dist/admin/app-*.css'
                    ],
                    js: [
                        'lib/jquery/jquery.min.js',
                        'lib/bootstrap/js/bootstrap.min.js',
                        'lib/angular/angular.min.js',
                        'lib/angular-cookies/angular-cookies.min.js',
                        'lib/angular-ui-router/angular-ui-router.min.js',
                        'lib/ng-file-upload/ng-file-upload.min.js',
                        'lib/ng-tasty/ng-tasty-tpls.min.js',
                        'lib/sweetalert/sweetalert.min.js',
                        'lib/angular-breadcrumb/angular-breadcrumb.js',
                        'lib/underscore/underscore-min.js',
                        'dist/admin/app-*.js',
                        'dist/admin/templates-*.js'
                    ]
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
    ]
};