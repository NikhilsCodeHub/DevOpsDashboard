var gulp = require('gulp'),
    // concat = require('gulp-concat'),
    // uglify = require('gulp-uglify'),
    // rename = require('gulp-rename'),
    // sass = require('gulp-ruby-sass'),
    // autoprefixer = require('gulp-autoprefixer'),
    browserSync = require('browser-sync').create();


gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: './'
        },
<<<<<<< HEAD
        startPath: 'app/ftp_analytics.html'
=======
        startPath: 'app/orderDashboard.html'
>>>>>>> f7050970059cd28549cf7c76167a087df895ddd2
    });
});

gulp.task('watch', function() {
  // Watch .html files
  gulp.watch('app/*.html', browserSync.reload);
  gulp.watch('components/sidebar/*.html', browserSync.reload);
  gulp.watch('components/topnavigation/*.html', browserSync.reload);
  // Watch .js files
  gulp.watch('app/js/*.js', ['scripts']);
});

// Default Task
gulp.task('default', ['browser-sync', 'watch']);