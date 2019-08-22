const app    = require( 'express' )();
const cli    = require( 'chalk' );
const server = app.listen();
const write  = console.log;

server.on('listening', () => {
	write(cli`{green ◽} Local server started!\n{green ◽} Listening at {red http://localhost:${server.address().port}}`);
});

server.on('error', () => {
	write(cli`{red ◽} Oh oh! Something went wrong :-(`);
});

app.get( '/*', require( './localserver/request-handler.js' ).requestHandler );