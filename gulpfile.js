var gulp = require('gulp');
var gutil = require('gulp-util');
var browserify = require('gulp-browserify');
var uglify = require('gulp-uglify');
var ghPages = require('gulp-gh-pages');
var path = require('path');

gulp.task('html', function() {
  gulp.src('web/index.html')
    .pipe(gulp.dest('build'));
});

gulp.task('build', function(callback) {
  gulp.src('web/main.js')
    .pipe(browserify({
      transform: ['yo-yoify'],
      debug: false
    }))
    .pipe(uglify())
    .pipe(gulp.dest('build'));
});

gulp.task('deploy', function() {
  return gulp.src('build/**/*')
    .pipe(ghPages());
});

gulp.task('default', ['html', 'build']);
