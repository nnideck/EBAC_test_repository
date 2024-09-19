const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const uglify = require('gulp-uglify')
const obfuscate = require('gulp-obfuscate');
const imagemin = require('gulp-imagemin');


function compilaSass() {
    return gulp.src('./gulp/src/styles/styles.scss')
    .pipe(sass({
        outputStyle: 'compressed'
    }))
    .pipe(gulp.dest('./gulp/build/styles'));
}

function comprimeJS() {
    return gulp.src('./gulp/src/scripts/main.js')
    .pipe(uglify())
    .pipe(obfuscate())
    .pipe(gulp.dest('./gulp/build/scripts'));
    callback()
}

function comprimeImagens() {
    return gulp.src('./gulp/src/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./gulp/build/images'));
}




exports.default = function() {
    gulp.watch('./gulp/src/styles/styles.scss',gulp.series(compilaSass));
    gulp.watch('./gulp/src/scripts/main.js',gulp.series(comprimeJS));
    gulp.watch('./gulp/src/images/*',gulp.series(comprimeImagens));
}

