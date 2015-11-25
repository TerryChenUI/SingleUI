var gulp = require('gulp')
open = require('gulp-open');

gulp.task('open', function () {
    gulp.src("index.html")
        .pipe(open({
            uri: 'http://localhost:8000/#/home',
            app: 'chrome'
        })
    );
});