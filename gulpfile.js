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
        server: "./content"
    });

    gulp.watch("./content/styles/**/*.css", ['postcss']);
    gulp.watch("./content/*.html").on('change', browserSync.reload);
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
        gulp.src('./content/styles/main.css'),
        gulp.src('./content/styles/**/*.css')
        .pipe(postcss(plugins))
        .pipe(gulp.dest('./content/dest'))
    )
});


gulp.task('default', ['serve']);
