/**
 * Adds an alert to the portal header.
 * 
 * The following shows the expected structure (as supported by our current CSS):
 * 
 *	<div id="tribe-marketing-alert">
			<div class="tribe-marketing-alert__content">
				<p><span class="emoji">⚠️ Heads up!</span>
				Response times for support requests are a little longer than usual. Please expect up to 3 business days for a reply.</p>
			</div>
		</div>
 */
function addAlert( message ) {
	// Add the tribe-marketing-alert class to the body tag so we can style appropriately
	document.body.setAttribute('class', document.body.getAttribute('class') + ' tribe-marketing-alert')
	// Add the actual message
	$navbar.before( message )
}