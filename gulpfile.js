const gulp = require('gulp')
const sass = require('gulp-sass')
const postcss = require('gulp-postcss')
const autoprefixer=require('autoprefixer')

gulp.task('sass', function () {
   return gulp.src('source/_sass/index.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(postcss([autoprefixer({browsers:'last 3 versions'})]))
    .pipe(gulp.dest('source/css'))
})

gulp.task('default', ['sass'])
