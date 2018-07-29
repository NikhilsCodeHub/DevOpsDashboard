var gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    sass = require('gulp-ruby-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    browserSync = require('browser-sync').create();


gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: './'
        },
<<<<<<< HEAD
<<<<<<< HEAD
        startPath: 'app/index.html'
=======
        startPath: './app/index.html'
>>>>>>> 3ad0f6d56c12bd20e881b07866c67bb927104280
=======
        startPath: './app/index.html'
>>>>>>> 3ad0f6d56c12bd20e881b07866c67bb927104280
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