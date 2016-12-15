var gulp = require('gulp'),
    sass = require('gulp-sass'),
    prefix = require('gulp-autoprefixer'),
    sassUnicode = require('gulp-sass-unicode'),
    gutil = require('gulp-util'),
    plumber = require('gulp-plumber'),
    browserSync = require('browser-sync');

gulp.task('sass', function () {
    return gulp.src([
            '_scss/main.scss'
        ])
        .pipe(plumber(function (error) {
            gutil.log(gutil.colors.red(error.message));
            this.emit('end');
        }))
        .pipe(sass({
            // includePaths: ['scss'],
            outputStyle: 'compressed',
            onError: browserSync.notify
        }))
        .pipe(sassUnicode())
        .pipe(prefix(['last 2 version', '> 0%', 'ie > 7', 'safari 5', 'ios 6', 'android 4'], {cascade: true}))
        .pipe(gulp.dest('_site/assets/css'))
        .pipe(browserSync.reload({stream: true}))
        .pipe(gulp.dest('assets/css'));
});
