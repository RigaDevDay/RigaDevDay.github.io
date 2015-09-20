var gulp = require('gulp');
var concat = require('gulp-concat');

gulp.task('build-js', function() {
  return gulp.src([
      'js/markerwithlabel_packed.1.1.9.js',
      'js/html5shiv.js',
      'js/respond.min.js',
      'js/jquery.js',
      'js/bootstrap.min.js',
      'js/ripples.min.js',
      'js/material.min.js',
      'js/index.js',
      'js/rdd.js',
      'js/facebook.js',
      'js/linkedin.js'
    ])
    .pipe(concat('rdd.js'))
    .pipe(gulp.dest('./dist/'));
});

gulp.task('watch', function() {
    gulp.watch('js/*.js', ['build-js']);
});

gulp.task('build', ['build-js', 'watch'])