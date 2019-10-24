/**
 * Stops our navbar from obscuring headings by taking its
 * height into account.
 * 
 * The ideal would be to use a purely CSS based solution,
 * but for now this will suffice and solve the immediate
 * UX difficulties facing KB users.
 */
function adjustVerticalOffset() {
	let currentID = window.location.toString().match(/#[a-z0-9\-_]+$/);

	// Grab the ID reference ('#something') or bail if we cannot/don't have it.
	if ( currentID !== null ) {
		currentID = currentID[ 0 ];
	} else {
		return;
	}

	// Pause momentarily before executing (see auto-toc code in knowledgebase.js).
	setTimeout( function() {
		let navbarHeight = $navbar.height();
		let topOfTarget  = $( currentID ).offset().top;

		window.scroll(
			document.documentElement.scrollLeft,
			topOfTarget - navbarHeight - 10
		);
	}, 440 );
}

// Adjust on page load then adjust again if there are further navigation events.
adjustVerticalOffset();
window.addEventListener( 'hashchange', adjustVerticalOffset, false );