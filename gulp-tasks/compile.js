var gulp = require('gulp'),
    browserify = require('browserify'),
    babel = require('babelify'),
    maps = require('gulp-sourcemaps'),
    stream = require('vinyl-source-stream'),
    buffer = require('vinyl-buffer');


module.exports = function compile() {
    var sources = browserify({
        entries: [
            'src/index.js',
            'www/build/html/templates.js'
        ],
        debug: true
    })
    .transform(babel, {
        presets: [
            'es2015'
        ],
        sourceMaps: false
    });

    return sources.bundle()
        .pipe(stream('app.min.js'))
        .pipe(buffer())
        .pipe(maps.init({ loadMaps: true }))
        .pipe(maps.write('./'))
        .pipe(gulp.dest('www/build/js'));
};

module.exports.dependencies = ['eslint','template'];