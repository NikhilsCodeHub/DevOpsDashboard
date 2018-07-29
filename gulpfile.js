var gulp = require('gulp');
    // concat = require('gulp-concat'),
    // uglify = require('gulp-uglify'),
    // rename = require('gulp-rename'),
    // sass = require('gulp-ruby-sass'),
    // autoprefixer = require('gulp-autoprefixer'),
  var browserSync = require('browser-sync').create();


gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: './'
        },
        startPath: '/app/index.html'
    });
});

gulp.task('watch', function() {
  // Watch .html files
  gulp.watch('app/*.html', browserSync.reload);
  gulp.watch('components/*.html', browserSync.reload);
  // Watch .js files
  gulp.watch('app/js/*.js', ['scripts']);
});

// Default Task
gulp.task('default', ['browser-sync', 'watch']);
