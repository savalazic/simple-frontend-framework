var gulp = require('gulp');
var webpack = require('gulp-webpack');
var browserSync = require('browser-sync').create();

gulp.task('webpack', function() {
  return gulp.src('src/')
    .pipe(webpack( require('./webpack.config.js') ))
    .pipe(gulp.dest('public/'));
});

gulp.task('sync', function() {
    browserSync.init({
        server: "public",
        notify: false
    });
});


gulp.task('watch', function () {
  gulp.watch('src/**/*.{styl,jade,js}', ['webpack']);
  gulp.watch('src/css/**/*.styl', ['webpack']);
  gulp.watch('src/**/*.{styl,jade,js}').on('change', browserSync.reload);
});

gulp.task('default', ['sync', 'watch']);
