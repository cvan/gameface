/* jshint node:true */
var concat = require('gulp-concat');
var gulp = require('gulp');
var connect = require('gulp-connect');
var helptext = require('gulp-helptext');
var jshint = require('gulp-jshint');


var paths = {
  'scripts': 'src/*.js',
  'stylesheets': 'src/*.css',
  'src': 'src/*',
  'index': 'index.html',
  'bowerComponents': 'bower_components/**/*'
};

gulp.task('lint', function() {
  return gulp.src(paths.scripts)
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task('styles', function () {
  return gulp.src(paths.stylesheets)
    .pipe(concat('include.min.css'))
    .pipe(gulp.dest('dist'));
});

gulp.task('scripts', function() {
  return gulp.src(paths.scripts)
    .pipe(concat('include.min.js'))
    .pipe(gulp.dest('dist'));
});

// Build styles and scripts.
gulp.task('build', ['lint', 'styles', 'scripts']);

gulp.task('connect', function() {
  connect.server({
    root: __dirname + '/src',
    port: process.env.PORT || 3000
  });
});

gulp.task('watch', function () {
  gulp.watch(paths.scripts, ['lint']);
  gulp.watch(paths.stylesheets, ['styles']);
});

// Do a build, start a server, and watch for changes.
gulp.task('server', ['build', 'connect', 'watch']);


gulp.task('help', helptext({
  'default': 'Shows the help message',
  'help': 'This help message',
  'styles': 'Compiles stylus',
  'lint': 'Runs JSHint on your code',
  'server': 'Starts the development server'
}));
