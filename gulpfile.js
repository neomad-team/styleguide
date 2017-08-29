var gulp = require('gulp');
var postcss = require('gulp-postcss')
var browserSync = require('browser-sync').create();

gulp.task('default', function() {
  // place code for your default task here
});

// gulp.task('css', function () {
//     var postcss    = require('gulp-postcss');
//     var sourcemaps = require('gulp-sourcemaps');

//     return gulp.src('src/**/*.css')
//         .pipe( sourcemaps.init() )
//         .pipe( postcss([ require('cssnext') ]) )
//         .pipe( sourcemaps.write('.') )
//         .pipe( gulp.dest('build/') );
// });

gulp.task('css', function () {
  return (
    gulp.src('./source/styles/00-base/base.css'),
    gulp.src('./source/styles/04-templates/home.css')
      .pipe(postcss([
        require("postcss-import")(),
        require("postcss-url")(),
        require("postcss-cssnext")(),
        require("postcss-browser-reporter")(),
        require("postcss-reporter")(),
      ]))
      .pipe(gulp.dest('source/dest/'))
  )
})

// Static Server + watching scss/html files
gulp.task('serve', function() {

      browserSync.init({
          server: "./source"
      });

      gulp.watch('./source/styles/00-base/base.css', ['css']);
      gulp.watch('./source/styles/**/*.css', ['css']);
      gulp.src('./source/styles/04-templates/home.css')
      gulp.watch("./source/styles/**/*.css").on('change', browserSync.reload);
      gulp.watch("./source/*.html").on('change', browserSync.reload);
  });

// Rerun the task when a file changes
// gulp.task('watch', function() {

//     browserSync.init({
//       file: ['./source']
//     });

//     gulp.watch('./source/styles/00-base/base.css', ['css']);
// });
