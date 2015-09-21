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
gulp.task('build-css', function() {
  return gulp.src([
      'css/bootstrap.min.css',
      'css/material-blue.min.css',
      'css/ripples.min.css',
      'css/rdd.css',
      'font-awesome/css/font-awesome.min.css',

    ])
    .pipe(concat('rdd.css'))
    .pipe(gulp.dest('./dist/'));
});

gulp.task('watch', function() {
    gulp.watch('js/*.js', ['build-js']);
    gulp.watch('css/*.css', ['build-css']);
});

gulp.task('dev', ['build-js', 'build-css', 'watch'])