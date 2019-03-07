/* JUMBOTRON SEARCH
 * A list of links to popular Knowledgebase posts displayed
 * right below the Jumbotron search input.
*/
var jumbotronSearch = `
	<div class="jumbotron__search">
		<ul>
			<li><strong>Popular:</strong></li>
			<li><a href="https://support.theeventscalendar.com/934573-Inserting-Calendar-Content-into-Posts-or-Pages">Shortcodes</a></li>
			<li><a href="https://theeventscalendar.com/functions/">Documentation</a></li>
			<li><a href="https://theeventscalendar.com/customizations/">Customization</a></li>
			<li><a href="https://theeventscalendar.com/subscription-information/">Orders</a></li>
		</ul>
	</div>
`;

/* FEATURED CONTENT
 * A 4-up of blocks spotlighting key Knowledgebase content
 * that analytics have shown are common customer inquiries.
*/
var componentFeaturedContent = `
	<section class="featured-content">
		<div class="featured-content__wrapper">
	 	<a href="https://support.theeventscalendar.com/153124-Themers-Guide">
	 		<article class="featured-content__item">
	 			<div class="featured-content__icon">
	 				<img src="https://theeventscalendar.com/content/uploads/2016/07/icon-brush-85x85.png" alt="" />
	 			</div>
	 			<div class="featured-content__body">
						<h3>Themer\'s Guide</h3>
						<p>Every calendar view is a template that can be overridden in your theme.</p>
	 			</div>
	 		</article>
			</a>
	 	<a href="https://theeventscalendar.com/extensions/">
	 		<article class="featured-content__item">
	 			<div class="featured-content__icon">
	 				<img src="https://theeventscalendar.com/content/uploads/2016/07/extensions-85x85.png" alt="" />
	 			</div>
	 			<div class="featured-content__body">
						<h3>Extension Library</h3>
						<p>Check out free mini-plugins to add additional features and settings to our plugins.</p>
	 			</div>
	 		</article>
			</a>
	 	<a href="https://theeventscalendar.com/functions/">
	 		<article class="featured-content__item">
	 			<div class="featured-content__icon">
	 				<img src="https://theeventscalendar.com/content/uploads/2016/07/icon-code-1-85x85.png" alt="" />
	 			</div>
	 			<div class="featured-content__body">
						<h3>Plugin Functions</h3>
						<p>Every available function in our products to use as filters for custom functionality.</p>
	 			</div>
	 		</article>
		</a>
	 	<a href="https://support.theeventscalendar.com/527363-Refund-policy">
	 		<article class="featured-content__item">
	 			<div class="featured-content__icon">
	 				<img src="https://theeventscalendar.com/content/uploads/2019/02/icon-return.png" alt="" />
	 			</div>
	 			<div class="featured-content__body">
						<h3>Orders & Refunds</h3>
						<p>Is the plugin not right for your project? Here\s info on orders and refund requests.</p>
	 			</div>
	 		</article>
		</a>
		</div>
	</section>
`;

/* PORTALS
 * A 2-up component that provides lists of links around a
 * general topic, including a heading, intro and unordered list.
*/
var componentPortals = `
	<div class="portals">
		<div class="portals__portal">
			<div class="portals__icon">
			<img src="https://theeventscalendar.com/content/themes/tribe-ecp/img/icons/icon-support-knowledgebase.png" />
		</div>
		<div class="portals__content">
			<h2>Getting Started</h2>
		<p>Articles and tutorials on everything from getting started to customizing the plugins, troubleshooting, integrations and more!</p>
		<ul>
			<li><a href="https://support.theeventscalendar.com/342672-New-User-Primer-The-Events-Calendar-and-Events-Calendar-PRO">The Events Calendar</a></li>
			<li><a href="https://support.theeventscalendar.com/259544-New-User-Primer-Event-Tickets--Event-Tickets-Plus">Event Tickets</a></li>
			<li><a href="https://support.theeventscalendar.com/710770-New-User-Primer-Event-Aggregator">Event Aggregator</a></li>
			<li><a href="https://support.theeventscalendar.com/890921-New-User-Primer-Community-Events">Community Events</a></li>
		</ul>
		<a href="https://theeventscalendar.com/knowledgebase-category/primers/" class="button button--primary">All Guides</a>
		</div>
		</div>
		<div class="portals__portal">
			<div class="portals__icon">
				<img src="https://theeventscalendar.com/content/themes/tribe-ecp/img/icons/icon-support-docs.png" />
			</div>
			<div class="portals__content">
				<h2>Trending Topics</h2>
				<p>A few of the most popular guides folks are reading that you may also find helpful for getting the most from the plugins.</p>
				<ul>
					<li><a href="https://support.theeventscalendar.com/934573-Inserting-Calendar-Content-into-Posts-or-Pages">Shortcodes</a></li>
					<li><a href="https://support.theeventscalendar.com/303643-Testing-for-conflicts">Testing for Conflicts</a></li>
					<li><a href="https://theeventscalendar.com/customizations/">Customization</a></li>
					<li><a href="https://support.theeventscalendar.com/969953-CSV-file-examples-for-importing">Importing Events</a></li>
				</ul>
				<a href="https://theeventscalendar.com/functions/" class="button button--primary">Visit Docs</a>
			</div>
		</div>
	</div>
`;

/* INTERSTITIAL
 * A component meant to spotlight a call-to-action.
*/
var componentInterstitial = `
	<div class="interstitial">
		<div class="interstitial__body interstitial--primary">
			<div class="interstitial__icon">
				<img src="https://theeventscalendar.com/content/themes/tribe-ecp/img/icons/icon-support-forum.png">
			</div>
			<div class="interstitial__content">
				<h3>Looking for More Help?</h3>
				<p>If you have looked through the documentation and knowledgebase and still have questions, then reach out to our friendly support staff and we will help you out.</p>
				<div class="interstitial__actions">
					<a href="https://support.theeventscalendar.com/submit_ticket" class="button button--secondary">Open Ticket</a>
					<a href="https://wordpress.org/support/plugin/the-events-calendar/" class="interstitial__text-link">Free plugin support</a>
				</div>
			</div>
		</div>
	</div>
`;

/* CATEGORY LIST HEADING
 * A heading used above the loop of Knowledgebase categories.
*/
var categoryListHeading = `
	<div class="section-heading">
		<h2>Guides & Tutorials</h2>
	</div>
`;

function addComponentFeaturedContent( content ) {
	if ( isHomePage === true ) {
		$jumbotron.after( content )
	}
}

function addComponentPortals( content ) {
	if ( isHomePage === true ) {
		$marginTop.before( content )
	}
}

function addCategoryHeading( heading ) {
	if ( isHomePage === true ) {
		$categoryList.before( heading )
	}
}

function addComponentInterstitial( content ) {
	if ( isHomePage === true ) {
		$footer.before( content )
	}
}

function optionallyRemovePresalesForm() {
	// If the user is not logged in or else if the presales form can't be located
	// we should not interfere
	if ( ! isLoggedIn || $presalesForm.length !== 1 ) {
		return
	}

	$presalesForm.hide()
}

addComponentFeaturedContent( componentFeaturedContent )
addComponentPortals( componentPortals )
addCategoryHeading( categoryListHeading )
addComponentInterstitial( componentInterstitial )
optionallyRemovePresalesForm()