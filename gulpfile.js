var gulp = require('gulp')
var sass = require('gulp-sass')
var pug = require('gulp-pug')
var watch = require('gulp-watch')
var gulpCopy = require('gulp-copy')

gulp.task('html', function () {
  return watch('src/**/*.pug', {
      ignoreInitial: false,
    })
    .pipe(pug())
    .pipe(gulp.dest('build/html'))
})

gulp.task('copy-template', function () {
  return watch('src/**/*.html', {
      ignoreInitial: false
    })
    .pipe(gulp.dest('build/html'))
})

gulp.task('copy-data', function () {
  return watch('origin/**/data.js', {
      ignoreInitial: false
    })
    .pipe(gulp.dest('build/html'))
})


gulp.task('default', ['html', 'copy-template', 'copy-data'])
