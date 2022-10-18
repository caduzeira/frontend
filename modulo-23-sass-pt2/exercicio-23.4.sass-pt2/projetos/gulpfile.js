const gulp = require('gulp')
const concat = require('gulp-concat')
const min = require('gulp-cssmin')
const rename = require('gulp-rename')
const ugly = require('gulp-uglify')
const htmlmin = require('gulp-htmlmin')
const { parallel } = require('gulp')
const sass = require('gulp-sass')(require('node-sass'))

function minCss(){
    return gulp.src([
        './node_modules/bootstrap/dist/css/bootstrap.css',
        './src/components/owl/css/owl.css',
        './src/components/fontawesome/css/all.css',
    ])
        .pipe(concat('libs.css'))
        .pipe(min())
        .pipe(rename({suffix:'.min'}))
        .pipe(gulp.dest('./dist/css'))
}

function minJs(){
    return gulp.src([
        './node_modules/jquery/dist/jquery.js',
        './src/components/owl/js/owl.js',
        './node_modules/bootstrap/dist/js/bootstrap.js',
        './src/components/fontawesome/js/all.js',
        './src/js/script.js',
    ])
        .pipe(concat('libs.js'))
        .pipe(ugly())
        .pipe(rename({suffix:'.min'}))
        .pipe(gulp.dest('./dist/js'))
}

function html(){
    return gulp.src('./**/*.html')
        .pipe(htmlmin({collapseWhitespace:true}))
        .pipe(gulp.dest('./dist'))
}

function minSass(){
    return gulp.src('./src/scss/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./dist/css'))
}

const process = parallel(minCss, minJs, html, minSass)

exports.default = process