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
    }
};