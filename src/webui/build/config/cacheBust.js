/**
 * Created by TerryChen on 2015/7/2.
 */
'use strict';
module.exports = {
    options: {
        encoding: 'utf8',
        algorithm: 'md5',
        length: 16,
        deleteOriginals: true,
        ignorePatterns: ['lib'],
        baseDir: '<%= directory.dist %>'
    },
    assets: {
        files: [
            {
                expand: true,
                src: ['<%= directory.dist %>/index.html']
            },
            {
                expand: true,
                src: ['<%= directory.dist %>/admin/index.html']
            }
        ]
    }
};
