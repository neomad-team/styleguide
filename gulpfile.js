var gulp = require('gulp');
var postcss = require('gulp-postcss');
var importcss = require('postcss-import');
var url = require('postcss-url');
var cssnext = require('postcss-cssnext');
var browserreporter = require('postcss-browser-reporter');
var reporter = require('postcss-reporter');
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
    var plugins = [
        importcss,
        url,
        cssnext({autoprefixer: false}),
        browserreporter,
        reporter
    ]

    return (
        gulp.src('./source/styles/main.css')
        .pipe(postcss(plugins))
        .pipe(gulp.dest('./source/dest'))
    )
});


gulp.task('default', ['serve']);
