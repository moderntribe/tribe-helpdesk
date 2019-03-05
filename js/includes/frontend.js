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
	$navbar.before( message )
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

addMarketingAlert( marketingAlert )
optionallyRemovePresalesForm()