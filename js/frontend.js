// Marketing alert
var marketingAlert = `
	<div id="tribe-marketing-alert">
		<div><span class="emoji">⚠️</span></div>
		<div>
			<strong>Heads up!</strong> 
			Response times for support requests are a little longer than usual. 
			Please expect up to 3 business days for a reply.
		</div>
	</div>
`;

// Some general advice we'll show as needed in the jumbotron area
var loggedOutUsersAdvice = `
	<p class="tribe-support-advice"> 
		<strong>Existing customer? To receive the fastest support possible,
		please <a href="https://support.theeventscalendar.com/login">login</a> before posting.</strong>
		In some cases, you may need to register first of all: be sure to do so using the same email address 
		you used when purchasing your license key!
	</p>
	<p class="tribe-support-advice">
		To learn more about accessing support or if you experience any problems, please refer to
		<a href="https://support.theeventscalendar.com/812859-Accessing-Support">this article</a>.
	</p>
`;

// Login form advice
var loginFormAdvice = `
	<p class="tribe-support-advice">
		⚠ Please note that your login credentials for <a href="https://theeventscalendar.com">theeventscalendar.com</a> 
		will not work here! Our Help Desk runs on a different platform and a separate account is needed.
	</p>
	<p class="tribe-support-advice">
		We do automatically link accounts where possible, though. So, for most customers, if you first login to 
		<a href="https://theeventscalendar.com">theeventscalendar.com</a> you should be automatically logged in here, 
		too. If you find that doesn&#146;t work for you, please try a password reset in the first instance or else 
		register for a new account.
	</p>
	<p class="tribe-support-advice">
		Be sure to use the same email address as you used when purchasing your license key!
	</p>
`;

// Logged in landing header advice
var loggedInLanderPageAdvice = `
	<p class="tribe-support-advice">
		We&#146;re here to help with all of your questions about Modern Tribe&#146;s event and ticketing solutions.
	</p>
	<p class="tribe-support-advice">
		Whether you need some tips to get the most from your calendar or are experiencing an unexpected bug or conflict, 
		we&#146;ll do our very best to help you. Please note that at busy periods there may be a delay of upto 48 hours 
		before we can reply.
	</p>
`;

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

var $marginTop = $( '.container.inner-margin-top' )

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

function addMarketingAlert( message ) {
	// Add the tribe-marketing-alert class to the body tag so we can style appropriately
	document.body.setAttribute('class', document.body.getAttribute('class') + ' tribe-marketing-alert')
	// Add the actual message
	$marginTop.before( message )
}

function addAccountHelperText() {
	// No jumbotron? Weird! Let's bail rather than try to inject content into a 
	// potentially modified/updated template
	if ( $jumbotronHeading.length !== 1 ) {
		return
	}

	// Lander page advice for logged in users
	if ( isLoggedIn && isHomePage ) {
		addJumbotronMessage( loggedInLanderPageAdvice )
	}
	// If the user is logged out and is visiting a page where the login form appears, add
	// appropriate advice 
	else if ( isLoggedOut && ( isLoginPage || isSubmitTicketPage || isMyTicketsPage ) ) {
		addJumbotronMessage( loginFormAdvice )
	}
	// If the user is logged out and is visiting the home page (where the login form *does not*
	// appear), apply different wording
	else if ( isLoggedOut && isHomePage ) {
		addJumbotronMessage( loggedOutUsersAdvice )
	}
}

function addJumbotronMessage( message ) {
	// Add the tribe-jumbotron-message class to the body tag so we can style appropriately
	document.body.setAttribute('class', document.body.getAttribute('class') + ' tribe-jumbotron-message')

	// Add the actual message
	$jumbotronHeading.after( message )
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