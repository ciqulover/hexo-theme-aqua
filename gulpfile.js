const gulp = require('gulp')
const sass = require('gulp-sass')
const postcss = require('gulp-postcss')
const autoprefixer = require('autoprefixer')
const livereload = require('gulp-livereload')

gulp.task('sass', function () {
  return gulp.src('source/_sass/index.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(postcss([autoprefixer({browsers: 'last 3 versions'})]))
    .pipe(gulp.dest('source/css'))
    .pipe(livereload())
})

gulp.task('js', function () {
  return gulp.src('source/js/scroll.js')
    .pipe(livereload())
})

gulp.task('default', ['sass'])
gulp.task('watch', ['sass', 'js'], function () {
  livereload.listen()
  gulp.watch('source/_sass/**/*.scss', ['sass'])
  gulp.watch('source/js/**/*.js', ['js'])
})
