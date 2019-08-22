const cli        = require( 'chalk' );
const fs         = require( 'fs' );
const message404 = require( './404-message' ).message404;
const write      = console.log;

exports.requestHandler = ( request, response ) => {
	const docsDir       = `${__dirname}/../../docs`;
	const requestPath   = request.path === '/' ? '/index.html' : decodeURIComponent( request.path );
	const sanitizedPath = requestPath.replace( /[^a-z0-9=&\-_\.\/\?]/gi, '' );
	const fullPath      = `${docsDir}${sanitizedPath}`;

	// Return a 404 if we can't serve it
	if ( ! fs.existsSync(fullPath) || ! fs.statSync(fullPath).isFile() ) {
		write( cli`{red ◾} ${fullPath} {black.bgRedBright  ⚠ 404 }` );
		return response.status( 404 ).send( message404() );
	}

	// Properties
	let isCSS = fullPath.match( /\.css/ ) !== null;
	let isJS  = fullPath.match( /\.js/ ) !== null;
	let isPNG = fullPath.match( /file\.php\? / ) !== null; 

	if ( isCSS ) {
		response.contentType( 'text/css' );
	} else if ( isJS ) {
		response.contentType( 'application/javascript' );
	} else if ( isPNG ) { 
		response.contentType( 'image/png' );
	} else {
		response.contentType( 'text/html' );
	}
	
	write( cli`{blue ◾} ${request.path}` );
	response.send( fs.readFileSync( fullPath ) );
};