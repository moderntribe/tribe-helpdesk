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
// Panel needs bottom offset to work properly
$('.article-page .col-md-3 .panel').affix({
	offset: {
		top: function () {
			var articleTop = $('.article-page').position().top;
			console.log(articleTop);
			return this.top = articleTop;
		},
		bottom: 100
	}
});
$('.article-page .col-md-3 .margin-bottom').affix({
	offset: {
		top: function () {
			var navHeight = $('.navbar').outerHeight();
			var jumbotronHeight = $('.jumbotron').outerHeight();
			return this.top = jumbotronHeight + navHeight;
		}
	}
});