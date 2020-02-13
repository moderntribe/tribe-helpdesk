let $guidesContainer = $( '.category-list > .row' );

// Fallbacks: these are mostly here for local testing, but also provide a 
// reasonable fallback if the real data cannot be loaded.
let fallbackLiveagentArticleData = {
	"Getting Started": {
		"The Events Calendar (and Pro)": "https://theeventscalendar.com/knowledgebase/k/new-user-primer-the-events-calendar-and-events-calendar-pro/",
		"Event Tickets (and Plus)": "https://theeventscalendar.com/knowledgebase/k/new-user-primer-event-tickets-event-tickets-plus/",
		"Community Events": "https://theeventscalendar.com/knowledgebase/k/new-user-primer-community-events/",
		"Community Tickets": "https://theeventscalendar.com/knowledgebase/k/new-user-primer-community-tickets/",
		"Event Aggregator": "https://theeventscalendar.com/knowledgebase/k/new-user-primer-event-aggregator/"
	},
	"Accounts & Billing": {
		"Updating Your Account Information": "https://theeventscalendar.com/knowledgebase/k/changing-email-address-and-other-user-account-related-data/",
		"Updating Payment Information": "https://theeventscalendar.com/knowledgebase/k/how-do-i-update-my-promoter-payment-information/",
		"Finding Order Invoices": "https://theeventscalendar.com/knowledgebase/k/order-invoices/",
		"Moving Your License Keys": "https://theeventscalendar.com/knowledgebase/k/moving-your-license-key/",
		"Cancelling a Subscription": "https://theeventscalendar.com/knowledgebase/k/canceling-a-subscription/"
	},
	"Pre-Sales": {
		"Can I Try the Plugins First?": "https://theeventscalendar.com/knowledgebase/k/do-you-have-a-demo-examples-i-can-see-or-trial-licenses/",
		"Can I Create Multiple Calendars?": "https://theeventscalendar.com/knowledgebase/k/can-you-have-multiple-calendars/",
		"What’s Included in Each License?": "https://theeventscalendar.com/knowledgebase/k/what-does-each-license-type-include/"
	},
	"Managing Events": {
		"Creating Events": "https://theeventscalendar.com/knowledgebase/k/creating-an-event/",
		"Creating a Recurring Event": "https://theeventscalendar.com/knowledgebase/k/recurring-events-event-series-in-events-calendar-pro/",
		"Creating Featured Events": "https://theeventscalendar.com/knowledgebase/k/featured-events/",
		"Importing Events": "https://theeventscalendar.com/knowledgebase/k/testing-the-wordpress-5-0-block-editor/",
		"Migrating Events": "https://theeventscalendar.com/knowledgebase/k/using-wordpress-export-tools-to-migrate-events-content/"
	},
	"Integrations": {
		"Tickets & WooCommerce": "https://theeventscalendar.com/knowledgebase/k/woocommerce-specific-ticket-settings/",
		"Social Sharing Integrations": "https://theeventscalendar.com/knowledgebase/k/adding-social-media-sharing-to-events/",
		"Yoast SEO": "https://theeventscalendar.com/knowledgebase/k/yoast-wordpress-seo-plugin-conflicts/",
		"WPML": "https://theeventscalendar.com/knowledgebase/k/setting-up-the-events-calendar-with-wpml/",
		"Plugin & Theme Compatibility": "https://theeventscalendar.com/knowledgebase/k/compatibility-with-third-party-plugins-and-themes/"
	},
	"Troubleshooting": {
		"Common Installation Issues": "https://theeventscalendar.com/knowledgebase/k/troubleshooting-the-most-common-installation-issues/",
		"Common Error Messages": "https://theeventscalendar.com/knowledgebase/k/common-error-messages/",
		"Themes and Plugins Conflicts": "https://theeventscalendar.com/knowledgebase/k/testing-for-conflicts/",
		"Fixing HTTP 404 errors": "https://theeventscalendar.com/knowledgebase/k/fixing-http-404-errors/",
		"Speed & Performance": "https://theeventscalendar.com/knowledgebase/k/performance-considerations/"
	}
};

// Use our fallbacks if the liveagentArticleData global is not available.
if ( 'object' !== typeof window.liveagentArticleData ) {
	window.liveagentArticleData = fallbackLiveagentArticleData;
}

/**
 * Initialize our guides and tutorials section.
 */
function guidesAndTutorialsInit() {
	removeDefaultGuides();

	// We expect the article data required for the Guides & Tutorials section
	// to be available via global object liveagentArticleData.
	if ( 'object' !== typeof liveagentArticleData ) {
		return;
	}

	buildNewCategoryBoxes();
}

/**
 * Removes the default category/article containers (which link to articles from
 * the legacy KB) from the DOM.
 */
function removeDefaultGuides() {
	$guidesContainer.children( 'div' ).remove();
}

/**
 * Builds out our replacement guides-and-tutorials section.
 */
function buildNewCategoryBoxes() {
	let html = '';

	for ( let [ categoryTitle, articleMap ] of Object.entries( liveagentArticleData ) ) {
		html += categoryBox( categoryTitle, articleMap );
	}

	$guidesContainer.html( html );
	$( '.category-list' ).show();
}

/**
 * Outputs a category box.
 *
 * The provided list is expected to be a map of URLs to titles.
 *
 * @param {string} title
 * @param {Object} list
 */
function categoryBox( title, list ) {
	title = escapeText( title );
	let listItems = '';

	// Convert the list into fully-fledged list items.
	for ( let [ key, value ] of Object.entries( list ) ) {
		let title = escapeText( key );
		let url   = encodeURI( value );

		listItems += `
			<li class="item-link item-A item-link-article">
				<a href="${url}">
					<span class="item-link-title">${title}</span>
				</a>
			</li>
		`;
	}

	// Take the list and use it to form a category block.
	return `
		<div class="col-md-4 col-sm-6">
			<div class="category-box">
				<h3 class="category-box-title">
					<span class="category-link-title">${title}</span>
				</h3>
				<ul>
					${listItems}
				</ul>
			</div>
		</div>
	`;
}

guidesAndTutorialsInit();