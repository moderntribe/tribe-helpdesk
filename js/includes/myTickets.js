/**
 * My Tickets Page Refinements
 * 
 * Update "Open" Ticket status to read "Waiting"
 * Update "Closed" Ticket status to read "Answered"
 * 
 */

if ( isLoggedIn === true ) {
	$( '.page-mytickets, .page-my_ticket' ).find( 'a[href="my_tickets?s=O"]' ).each( function() {
		var text = $( this ).text().replace( 'Open', 'Waiting' );
		$( this ).text( text );
	} );

	$( '.page-mytickets, .page-my_ticket' ).find( 'a[href="my_tickets?s=C"]' ).each( function() {
		var text = $( this ).text().replace( 'Closed', 'Answered' );
		$( this ).text( text );
	} );
}