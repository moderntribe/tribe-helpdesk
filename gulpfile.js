var gulp             = require('gulp'),
    plumber          = require('gulp-plumber'),
    sass             = require('gulp-ruby-sass'),
    autoprefixer     = require('gulp-autoprefixer'),
    cleanCSS         = require('gulp-clean-css'),
    rename           = require("gulp-rename"),
    concat           = require('gulp-concat'),
    uglify           = require('gulp-uglify'),
    path             = require('path'),
    inject           = require('gulp-inject'),
    livereload       = require('gulp-livereload');

/**
 * Compile styles
 */
gulp.task('styles', function() {
	return sass( 'scss/*' )
		.pipe(autoprefixer())
    .pipe(cleanCSS())
    .pipe(rename('style.min.css'))
		.pipe(gulp.dest('dist'))
		.pipe(livereload());
});

/**
 * Concatenate scripts
 */
gulp.task('scripts', function(){
	return gulp.src('js/frontend.js')
	.pipe(concat('frontend.js'))
  .pipe(uglify())
  .pipe(rename('frontend.min.js'))
	.pipe(gulp.dest('dist'))
});

/**
 * Watch task
 */
gulp.task('watch', function(){
	livereload.listen();

	gulp.watch('scss/*', ['styles']);
	gulp.watch('js/*.js', ['scripts'] ).on('change',function(file) {
		livereload.changed(file.path);
  });

});

/**
 * Build scripts and styles for deploy
 */
gulp.task( 'build', ['scripts', 'styles' ]);
