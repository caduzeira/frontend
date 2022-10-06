const gulp = require('gulp')
const concat = require('gulp-concat')
const min = require('gulp-cssmin')
const rename = require('gulp-rename')
const ugly = require('gulp-uglify')
const htmlmin = require('gulp-htmlmin');
const { parallel } = require('gulp')
const babel = require('gulp-babel')
const browserSync = require('browser-sync').create()
const reload = browserSync.reload

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

gulp.task('serve',function(){

    browserSync.init({
        server:{
            baseDir: './dist'
        }
    })
    gulp.watch('./src/**/*').on('change', process)
    gulp.watch('./src/**/*').on('change', reload)
})

function end(cb){
    console.log("Tarefas Concluidas")
    return cb()
}

const process = parallel(tarefaCss, tarefaHtml, tarefaJs, end)

exports.default = process
