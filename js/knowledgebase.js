/**
 * Houses knowledgebase-related tweaks and adjustments.
 * 
 * Utilizes the 'tribe-liveagent.ready' hook to waits until our core logic
 * has loaded before starting.
 */
document.body.addEventListener( 'tribe-liveagent.ready', function() { 
	var $ = jQuery.noConflict();

	/**
	 * Finds and removes any category boxes that are devoid of articles.
	 * 
	 * Unsure why LiveAgent even renders these, but it's not particularly
	 * useful so we'll default to getting rid of them.
	 */
	$( '.category-list' ).find( '.alert.alert-empty' ).each( function() {
		$( this ).parents( '.col-md-4.col-sm-6' ).hide();
	} );
} );