const gulp = require('gulp')
const concat = require('gulp-concat')
const min = require('gulp-cssmin')
const rename = require('gulp-rename')
const ugly = require('gulp-uglify')
//const img = require('gulp-image')

function tarefaCss(cb){
    return gulp.src([
        './node_modules/bootstrap/dist/css/bootstrap.css',
        './src/owl/css/owl.css',
        './src/css/styles.css',
        ])
        .pipe(concat('libs.css'))
        .pipe(min())
        .pipe(rename({suffix:'.min'}))
        .pipe(gulp.dest('./dist/css'))
}

function tarefaJs(cb){
    return gulp.src([
        './node_modules/jquery/dist/jquery.js',
        './node_modules/bootstrap/dist/js/bootstrap.js',
        './src/owl/js/owl.js',
        './src/jquery-mask/jquery.mask.js',
        './src/js/custom.js',
    ])
        .pipe(concat('libs.js'))
        .pipe(ugly())
        .pipe(rename({suffix:'.min'}))
        .pipe(gulp.dest('./dist/js'))
}

/*function tarefaImage(cb){
    return gulp.src('./src/img/*')
        .pipe(image({
            pngquant:true,
            optipng:false,
            zopflipng:true,
            jpegRecompress:false,
            mozjpeg:true,
            gifsicle:true,
            svgo:true,
            concurrent:10,
            quiet:true
        }))
        .pipe(gulp.dest('./dist/img'))
}
*/
exports.styles = tarefaCss
exports.js = tarefaJs
//exports.image = tarefaImage