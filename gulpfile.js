const gulp = require('gulp');
var browserSync = require('browser-sync').create();
const sass = require('gulp-sass')(require('node-sass'));
const del = require('del');

gulp.task('sass', () => {
  return gulp.src('src/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./src/css/'));
});

gulp.task('sass:watch', function () {
  gulp.watch('src/scss/**/*.scss', gulp.series('sass'));
});

gulp.task('watch', function () {
  browserSync.init({ server: "./src" });
  gulp.watch("src/*.html").on('change', browserSync.reload);

  gulp.watch('src/scss/**/*.scss', gulp.series('sass'));
});

gulp.task('clean', () => {
  return del([
    'src/css/main.css',
  ]);
});

// gulp.task('default', gulp.series(['clean', 'sass']));