var gulp = require('gulp'),
    browserSync = require('browser-sync').create();

var _paths = {
    js: './src/**/*.js',
    html: './src/**/*.html',
    sass: [
        './src/**/*.scss',
        './scss/**/*.scss'
    ]
};

var _config = {
    server: {
        baseDir: 'www',
        index: 'index.html'
    }
};

module.exports = function reload() {
    browserSync.init(_config);
    gulp.watch(_paths.sass, ['onchangescss']);
    gulp.watch(_paths.js, ['onchange']);
    gulp.watch(_paths.html, ['onchange']);
};


gulp.task('onchange', ['compile'], () => browserSync.reload());

gulp.task('onchangescss', ['sass'], () => browserSync.reload());

module.exports.dependencies = ['compile', 'libs', 'sass'];