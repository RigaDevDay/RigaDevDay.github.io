'use strict';

var path = require('path');
var gulp = require('gulp');
var conf = require('./conf');

var babel = require('babel-core');
var vm = require('vm');
var util = require('util');
var fs = require('fs');

var browserSync = require('browser-sync');
var webpack = require('webpack-stream');

var $ = require('gulp-load-plugins')();

function webpackWrapper (watch, test, callback) {
  var webpackOptions = {
    watch: watch,
    module: {
      preLoaders: [{test: /\.js$/, exclude: /node_modules/, loader: 'eslint-loader'}],
      loaders: [{test: /\.js$/, exclude: /node_modules/, loaders: ['ng-annotate', 'babel-loader']}]
    },
    output: {filename: 'index.module.js'}
  };

  if (watch) {
    webpackOptions.devtool = 'inline-source-map';
  }

  var webpackChangeHandler = function (err, stats) {
    if (err) {
      conf.errorHandler('Webpack')(err);
    }
    $.util.log(stats.toString({
      colors: $.util.colors.supportsColor,
      chunks: false,
      hash: false,
      version: false
    }));
    browserSync.reload();
    if (watch) {
      watch = false;
      callback();
    }
  };

  var sources = [path.join(conf.paths.src, '/app/index.module.js')];
  if (test) {
    sources.push(path.join(conf.paths.src, '/app/**/*.spec.js'));
  }

  return gulp.src(sources)
    .pipe(webpack(webpackOptions, null, webpackChangeHandler))
    .pipe(gulp.dest(path.join(conf.paths.tmp, '/serve/app')));
}

gulp.task('scripts', function () {
  return webpackWrapper(false, false);
});

gulp.task('data', function () {
  var code = babel.transformFileSync(
    path.join(conf.paths.src, "/app/services/main.data.js")).code;

  // cut out transpiler stuff
  code = code.substring(79, code.length - 28);

  var sandbox = {};
  var context = new vm.createContext(sandbox);
  var script = new vm.Script(code);
  script.runInContext(context);

  var json = JSON.stringify(sandbox.mainData);

  fs.writeFileSync(path.join(conf.paths.src, '/assets/data/main.json'), json);
});

gulp.task('scripts:watch', ['scripts'], function (callback) {
  return webpackWrapper(true, false, callback);
});
