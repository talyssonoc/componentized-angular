var path = require('path');

var gulp = require('gulp');
var babelify = require('babelify');
var browserify = require('browserify');
var stringify = require('stringify');
var source = require('vinyl-source-stream');

var jsGlob = 'app/client/js/**/*';
var specGlob = 'spec/**/*.js';

gulp.task('build:js', function () {
  browserify({
    entries: 'app/client/js/index.js',
    debug: true,
    paths: ['node_modules', 'app/client/js'],
    transform: [
      babelify,
      stringify(['.html'])
    ]
  })
  .bundle()
  .pipe(source('index.js'))
  .pipe(gulp.dest('build/js'));
});

gulp.task('watch:js', ['build:js'], function() {
  gulp.watch(jsGlob, ['build:js']);
});
