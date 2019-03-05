// "Jumbotron" heading element
var $jumbotronHeading = $( '.jumbotron h1' )

// This form currently is embedded in the portal homepage
var $presalesForm = $( '#presales-form' )

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

var marginTop = $( '.container.inner-margin-top' )

/**
 * Return the page URL, but with any trailing slashes and the protocol 
 * ("http://" or "https://") stripped for safer comparisons.
 */
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

function addJumbotronMessage( message ) {
	// Add the tribe-jumbotron-message class to the body tag so we can style appropriately
	document.body.setAttribute('class', document.body.getAttribute('class') + ' tribe-jumbotron-message')

	// Add the actual message
	$jumbotronHeading.after( message )
}