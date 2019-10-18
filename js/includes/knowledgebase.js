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
$( '.article-page .col-md-3 .panel' ).affix({
	offset: {
		top: function () {
			var articleTop = $('.article-page').position().top;
			return this.top = articleTop;
		},
		bottom: 100
	}
});
$( '.article-page .col-md-3 .margin-bottom' ).affix({
	offset: {
		top: function () {
			var navHeight = $('.navbar').outerHeight();
			var jumbotronHeight = $('.jumbotron').outerHeight();
			return this.top = jumbotronHeight + navHeight;
		}
	}
});

/**
 * Auto-generated table-of-contents.
 * 
 * This plugin auto-generates a Table of Contents (TOC) based on the
 * headings of a given page. We're implementing this on the KB articles
 * so we can provide users (and agents) the ability to link directly to a
 * piece of an article when working with a user. 
 * 
 * We only initiate this if an .article-toc element is present on the page.
 */
if ( document.getElementsByClassName( 'article-toc' ).length ) {
	tocbot.init( {
		// Where to render the table of contents.
		tocSelector: '.article-toc',

		// Where to grab the headings to build the table of contents.
		contentSelector: '.article-content',

		// Which headings to grab inside of the contentSelector element.
		headingSelector: 'h1, h2, h3, h4, h5, h6',

		// Explictly set the duration partly so we can reason about this elsewhere.
		scrollSmoothDuration: 400,
	} );
}