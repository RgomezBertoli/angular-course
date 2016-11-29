var gulp = require('gulp'),
    eslint = require('gulp-eslint');

module.exports = function () {
    return gulp.src([
            './src/**/*.js',
            './gulp-tasks/**/*.js'
        ])
        .pipe(eslint())
        .pipe(eslint.failAfterError());
};