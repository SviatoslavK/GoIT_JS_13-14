var gulp      = require('gulp'),
    concat    = require('gulp-concat'),
    rename    = require('gulp-rename'),
    minifyCSS = require('gulp-minify-css'),
    uglify    = require('gulp-uglify'),
    babel     = require('gulp-babel');

gulp.task('default', function() {
    gulp.src('css/*.css')
        .pipe(concat('bundle.css'))
        .pipe(minifyCSS())
        .pipe(rename('bundle.min.css'))
        .pipe(gulp.dest('dist/css'));
});

gulp.task('compress', function () {
    gulp.src('js/*.js')
        .pipe(babel())
        .pipe(concat('bundle.js'))
        .pipe(rename('bundle.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
});

gulp.task('watch', function() {
    gulp.watch('css/*.css', ['default'])
    gulp.watch('js/*.js', ['compress'])
});
