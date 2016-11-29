var gulp = require('gulp'),
    templateCache = require('gulp-angular-templatecache');

module.exports = function remplate() {
    return gulp.src([
            './src/**/*.html'
        ])
        .pipe(templateCache('templates.js', { 
            module: 'course', 
            root: 'src/' 
        }))
        .pipe(gulp.dest('www/build/html'));
};