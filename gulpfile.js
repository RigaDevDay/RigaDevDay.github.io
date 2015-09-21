var gulp = require('gulp');
var concat = require('gulp-concat');
var connect = require('gulp-connect');

gulp.task('build-js', function() {
  return gulp.src([
      'js/html5shiv.js',
      'js/respond.min.js',
      'js/jquery.js',
      'js/templates.js',
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
      'css/rdd.css'
    ])
    .pipe(concat('rdd.css'))
    .pipe(gulp.dest('./dist/'));
});

gulp.task('watch', function() {
    gulp.watch('js/*.js', ['build-js']);
    gulp.watch('css/*.css', ['build-css']);
});

gulp.task('connect', function() {
  connect.server();
});

gulp.task('dev', ['build-js', 'build-css', 'connect', 'watch'])