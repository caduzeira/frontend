const gulp = require('gulp')
const concat = require('gulp-concat')
const min = require('gulp-cssmin')
const rename = require('gulp-rename')
const ugly = require('gulp-uglify')
const htmlmin = require('gulp-htmlmin');
const { parallel } = require('gulp')
const babel = require('gulp-babel')

function tarefaCss(cb){
    return gulp.src('./src/**/*.css')
        .pipe(concat('libs.css'))
        .pipe(min())
        .pipe(rename({suffix:'.min'}))
        .pipe(gulp.dest('./dist/css'))
}

function tarefaJs(cb){
    return gulp.src('./src/**/*.js')
        .pipe(babel({
            comments:false,
            presets:['@babel/env']
        }))
        .pipe(concat('libs.js'))
        .pipe(ugly())
        .pipe(rename({suffix:'.min'}))
        .pipe(gulp.dest('./dist/js'))
}

function tarefaHtml(cb){
    return gulp.src('./src/**/*.html')
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest('./dist'))
}

exports.default = parallel(tarefaCss, tarefaHtml, tarefaJs)