jQuery( function( $ ) { 
	// This is the main header / page top
	var $tribeMarketingAlert = $( '#tribe-marketing-alert' )

	// Test if the current user appears to be logged in
	var isLoggedIn = $( '#menu-item-user' ).length === 1

	// Reverse of the above, to help us write cleaner conditionals
	var isLoggedOut = ! isLoggedIn

	// We'll use this for further comparisons
	var currentUrl = getCurrentUrl()

	// Test if we're on the support portal homepage
	var isHomePage = 'support.theeventscalendar.com' === currentUrl

	// Test if we're on the login page
	var isLoginPage = currentUrl.match( /login/ ) !== null

	// Test if we're on the My Tickets page
	var isMyTicketsPage = currentUrl.match( /my_tickets/ ) !== null

	// Test if we're on the Submit Ticket page
	var isSubmitTicketPage = currentUrl.match( /submit_ticket/ ) !== null

	var innerMarginTop = $( '.container.inner-margin-top' )

	var marginTop = $( '.margin-top' )

	/**
	 * Return the page URL, but with any trailing slashes and the protocol
	 * ("http://" or "https://") stripped for safer comparisons.
	**/
	function getCurrentUrl() {
		var url = document.location.toString()
		var protocolSeparator = url.match( /:\/\// )

		// Remove trailing slash for uniformity
		if ( '/' === url.slice( -1 ) ) {
			url = url.slice( 0, -1 )
		}

		// Remove the protocol
		if ( protocolSeparator !== null ) {
			url = url.slice( protocolSeparator.index + 3 )
		}
		
		return url;
	}

		function addMarketingAlert( message ) {
			// Add the tribe-marketing-alert class to the body tag so we can style appropriately
			document.body.setAttribute('class',
			document.body.getAttribute('class') + ' tribe-marketing-alert')
			// Add the actual message
			innerMarginTop.before( message )
		}
		
		function addComponentHeader() {
			document.body.setAttribute('class', document.body.getAttribute('class') + 'tribe-component-header')
			tribeMarketingAlert.after( componentHeader )
		}

		function addComponentPortals() {
			document.body.setAttribute('class', document.body.getAttribute('class') + 'hero')
			marginTop.after( componentPortals )
		}

		function addComponentInterstitial() {
			document.body.setAttribute('class', document.body.getAttribute('class') + 'portals')
			componentPortals.after( componentInterstitial )
		}

		addMarketingAlert( marketingAlert )
		addComponentHeader()
		addComponentPortals()
		addComponentInterstitial()
} )