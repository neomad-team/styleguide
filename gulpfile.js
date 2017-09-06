var gulp = require('gulp');
var postcss = require('gulp-postcss')
var browserSync = require('browser-sync').create();

// Static Server + watching css/html files
gulp.task('serve', ['postcss'], function() {

    browserSync.init({
        server: "./source"
    });

    gulp.watch("./source/styles/**/*.css", ['postcss']);
    gulp.watch("./source/*.html").on('change', browserSync.reload);
});

// Compile postCSS
gulp.task('postcss', function () {
    return (
        gulp.src('./source/styles/main.css')
        .pipe(postcss([
            require("postcss-import")(),
            require("postcss-url")(),
            require("postcss-cssnext")(),
            require("postcss-browser-reporter")(),
            require("postcss-reporter")(),
        ]))
        .pipe(gulp.dest('./source/dest'))
    )
});


gulp.task('default', ['serve']);
