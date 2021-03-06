var gulp = require('gulp'),
    concat = require('gulp-concat');

module.exports = function libs(){
    var sources = [
        'node_modules/angular/angular.min.js',
        'node_modules/ui-router/release/angular-ui-router.min.js'
    ];

    return gulp.src(sources)
        .pipe(concat('vendors.min.js'))
        .pipe(gulp.dest('www/build/js'));
};