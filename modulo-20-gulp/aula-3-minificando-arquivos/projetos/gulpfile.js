const gulp = require('gulp')
const concat = require('gulp-concat')
const min = require('gulp-cssmin')
const rename = require('gulp-rename')
const ugly = require('gulp-uglify')

function tarefaCss(cb){
    return gulp.src('./src/**/*.css')
        .pipe(concat('libs.css'))
        .pipe(min())
        .pipe(rename({suffix:'.min'}))
        .pipe(gulp.dest('./dist/css'))
}

function tarefaJs(){
    return gulp.src('./src/**/*.js')
        .pipe(concat('libs.js'))
        .pipe(ugly())
        .pipe(rename({suffix:'.min'}))
        .pipe(gulp.dest('./dist/js'))
}

exports.styles = tarefaCss
exports.js = tarefaJs