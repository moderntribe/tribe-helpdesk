const { dest, parallel, series, src, watch } = require( 'gulp' );

const sass         = require( 'gulp-sass' );
const autoprefixer = require( 'gulp-autoprefixer' );
const cleanCSS     = require( 'gulp-clean-css' );
const rename       = require( 'gulp-rename' );
const concat       = require( 'gulp-concat' );
const uglify       = require( 'gulp-uglify' );
const livereload   = require( 'gulp-livereload' );
const wrapper      = require( 'gulp-wrapper' );
const babel        = require( 'gulp-babel' );
const eslint       = require( 'gulp-eslint' );
const notify       = require( 'gulp-notify' );

/**
 * Compile styles
 */
async function styles() {
	return sass( 'scss/*' )
		.pipe( autoprefixer(
			{
				browsers: [ 'last 2 versions' ]
			}
		) )
		.pipe( cleanCSS() )
		.pipe( rename( 'style.min.css' ) )
		.pipe( dest( 'dist' ) )
		.pipe( dest( 'docs' ) )
		.pipe( livereload() );
}

/**
 * Concatenate scripts
 */
async function scripts() {
	// All of our code will execute in a scope where jQuery is
	// defined and aliased to $ (or else if jQuery is not available
	// it will not run at all)
	let jQueryWrapper = {
		header: `
			/* DO NOT EDIT THIS FILE DIRECTLY
			 * It is generated and minified automatically on build
			*/
			
			( function() { 
				// Safety check: we expect jQuery to be present, but this may change unexpectedly
				if ( 'function' !== typeof jQuery ) {
					return;
				}

				jQuery( function( $ ) { 
		`,
		footer: `
				} ); // End of jQuery document ready block
			} )(); // End of anonymous function wrapper
		`
	}

	return src( [
			'./js/globals/**/*.js',
			'./js/vendor/**/*.js',
			'./js/includes/**/*.js',
		] )	
		.pipe( concat( 'frontend.js' ) )
		.pipe( wrapper( jQueryWrapper ) )
		.pipe( babel() )
		.pipe( uglify() )
		.pipe( rename( 'frontend.min.js' ) )
		.pipe( dest( 'dist' ) )
		.pipe( dest( 'docs' ) )
}

async function lintJS() {
	const lintingRules = {
		'rules':{
			'quotes': [1, 'single'],
			'semi': [1, 'always']
		}
	};

	const notifyRules = {
		message : "✔︎ eslint task - complete!",
		onLast  : true
	};

	return src( './js/**/*.js' )
		.pipe( eslint( lintingRules ) )
		.pipe( notify( notifyRules ) )
		.pipe( eslint.format() );
}

/**
 * "Watch" task.
 */
function autobuild() {
	livereload.listen();

	watch( 'scss/*', styles ).on( 'change', ( file ) => {
		livereload.changed( file.path );
	} );

	watch( 'js/*.js', scripts ).on( 'change', ( file ) => {
		livereload.changed( file.path );
	} );
}

exports.build = parallel( scripts, styles );
exports.lint = lintJS;
exports.scripts = series( lintJS, scripts );
exports.styles = series( styles );
exports.watch = autobuild;