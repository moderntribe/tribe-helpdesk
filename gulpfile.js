var gulp         = require( 'gulp' );
var sass         = require( 'gulp-ruby-sass' );
var autoprefixer = require( 'gulp-autoprefixer' );
var cleanCSS     = require( 'gulp-clean-css' );
var rename       = require( 'gulp-rename' );
var concat       = require( 'gulp-concat' );
var uglify       = require( 'gulp-uglify' );
var livereload   = require( 'gulp-livereload' );

/**
 * Compile styles
 */
gulp.task( 'styles', function() {
	return sass( 'scss/*' )
		.pipe( autoprefixer() )
		.pipe( cleanCSS() )
		.pipe( rename( 'style.min.css' ) )
		.pipe( gulp.dest( 'dist' ) )
		.pipe( livereload() );
});

/**
 * Concatenate scripts
 */
gulp.task( 'scripts', function() {
	return gulp.src( './js/*.js' )
		.pipe( concat( 'frontend.js' ) )
		.pipe( gulp.dest( 'dist' ) )
		.pipe( uglify() )
		.pipe( rename( 'frontend.min.js' ) )
		.pipe( gulp.dest( 'dist' ) )
});

/**
 * Watch task
 */
gulp.task( 'watch', function() {
	livereload.listen();

	gulp.watch( 'scss/*', ['styles'] );
	gulp.watch( 'js/*.js', ['scripts'] ).on( 'change' ,function( file ) {
		livereload.changed( file.path );
	} );
});

/**
 * Build scripts and styles for deploy
 */
gulp.task( 'build', ['scripts', 'styles'] );