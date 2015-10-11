/**
 * Created by TerryChen on 2015/10/11.
 */
'use strict';
module.exports = function (grunt) {
    var filter = function (files, pattern) {
        return files.filter((function (file) {
            return file.match(pattern);
        }));
    };
    grunt.registerMultiTask('login', 'Process login.html template', function () {
        var environment, dirRE, i, j, len, len1, script, scripts, style, styles;
        grunt.log.writeln('environment ' + this.data.environment);
        dirRE = new RegExp("^./dist/admin/", "g");

        scripts = filter(this.filesSrc, /\.js$/).map(function (file) {
            return file.replace(dirRE, "");
        });
        styles = filter(this.filesSrc, /\.css$/).map(function (file) {
            return file.replace(dirRE, "");
        });

        //scripts
        if ((scripts != null) && scripts.length !== 0) {
            grunt.log.writeln('scripts:');
        }
        for (i = 0, len = scripts.length; i < len; i++) {
            script = scripts[i];
            grunt.log.writeln(script);
        }

        //styles
        if ((styles != null) && styles.length !== 0) {
            grunt.log.writeln('styles:');
        }
        for (j = 0, len1 = styles.length; j < len1; j++) {
            style = styles[j];
            grunt.log.writeln(style);
        }

        grunt.file.copy('./src/admin/login.html', './dist/admin/login.html', {
            process: (function (_this) {
                return function (contents, path) {
                    return grunt.template.process(contents, {
                        data: {
                            styles: styles,
                            scripts: scripts
                        }
                    });
                };
            })(this)
        });
    });
};
