( function() { 
	// Safety check: jQuery should be present, but this may change unexpectedly
	if ( 'function' !== typeof jQuery ) {
		return;
	}
	
	// Some general advice we'll show as needed in the jumbotron area
	var loggedOutUsersAdvice = 
		  '<p class="tribe-support-advice"> <strong>Existing customer? To receive the fastest support possible, '
		+ 'please <a href="https://support.theeventscalendar.com/login">login</a> before posting.</strong> '
		+ 'In some cases, you may need to perform a password reset first of all: to learn more about accessing '
		+ 'support, or if you experience any problems, please refer to '
		+ '<a href="https://support.theeventscalendar.com/812859-Accessing-Support">this article</a>.</p>'

	jQuery( function( $ ) { 
		// "Jumbotron" heading element
		var $jumbotronHeading = $( '.jumbotron h1' )

		var $presalesForm = $( '#presales-form' )

		// Test if the current user appears to be logged in
		var isLoggedIn = $( '#menu-item-user' ).length === 1

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

		/**
		 * Return the page URL, but with any trailing slashes and the protocol 
		 * ("http://" or "https://") stripped for safer comparisons.
		 */
		function getCurrentUrl() {
			let url = document.location.toString()
			let protocolSeparator = url.match( /:\/\// )

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

		function addAccountHelperText() {
			// We need do nothing more if the user is already logged in, or if they are on the
			// login page already (or if the expected jumbotron heading is absent)
			if ( isLoggedIn || isLoginPage || $jumbotronHeading.length !== 1 ) {
				return
			}

			$jumbotronHeading.after( loggedOutUsersAdvice )
		}

		function optionallyRemovePresalesForm() {
			// If the user is not logged in or else if the presales form can't be located
			// we should not interfere
			if ( ! isLoggedIn || $presalesForm.length !== 1 ) {
				return
			}

			$presalesForm.hide()
		}

		addAccountHelperText()
		optionallyRemovePresalesForm()
	} ) 
} )()
