const gulp = require('gulp'),
      sass = require('gulp-sass'),
      uglify = require('gulp-uglify-es').default;


gulp.task('sass', function() {
  return gulp.src('./app/main.scss')
          .pipe(sass())
          .pipe(gulp.dest('./app/css'))
})

