/**
 * Finds and removes any category boxes that are devoid of articles.
 * 
 * Unsure why LiveAgent even renders these, but it's not particularly
 * useful so we'll default to getting rid of them.
 */
$( '.category-list' ).find( '.alert.alert-empty' ).each( function() {
	$( this ).parents( '.col-md-4.col-sm-6' ).hide();
} );


/**
 * Adds Bootstrap "Affix" to the sidebar elements
 * 
 * Had to target the search bar + article lists individually
 */
$('.article-page .col-md-3 .panel, .article-page .col-md-3 .margin-bottom').affix({
	offset: {
		top: 520, // Size of nav + header, approximately
		bottom: function () {
			return (this.bottom = $('.footer').outerHeight(true))
		}
	}
});