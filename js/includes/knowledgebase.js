/**
 * Finds and removes any category boxes that are devoid of articles.
 * 
 * Unsure why LiveAgent even renders these, but it's not particularly
 * useful so we'll default to getting rid of them.
 */
$( '.category-list' ).find( '.alert.alert-empty' ).each( function() {
	$( this ).parents( '.col-md-4.col-sm-6' ).hide();
} );

// Adds a sticky class to the sidebar element on articles
// See js/vendor/sticky.js for sticky function
function addStickyClass() {
	if ( isHomePage !== true ) {
		$( '.col-md-3' ).addClass( 'sticky' )
		stickyScroll();
	}
}

addStickyClass()