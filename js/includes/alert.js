/**
 * Adds an alert to the portal header.
 * 
 * The following shows the expected structure (as supported by our current CSS):
 * 
 * 	<div id="tribe-marketing-alert">
 * 		<div class="tribe-marketing-alert__content">
 * 			<p><span class="emoji">⚠️ Heads up!</span>
 * 			Response times for support requests are a little longer than usual. Please expect up to 3 business days for a reply.</p>
 * 		</div>
 * 	</div>
 */
function addAlert( message ) {
	// Add the tribe-marketing-alert class to the body tag so we can style appropriately
	document.body.setAttribute('class', document.body.getAttribute('class') + ' tribe-marketing-alert')
	// Add the actual message
	$navbar.before( message )
}

/* Remove this when the time comes */
addAlert( `
	<div id="tribe-marketing-alert">
		<div class="tribe-marketing-alert__content">
			<p><span class="emoji">⚠️ Heads up!</span>
			Please note, the whole team is out this week for our annual team trip where we discuss how we can provide 
			better products, services, and support for our clients. Due to this our response times in the Help Desk 
			will be slower than usual. Thanks for your kind patience in advance during this time!</p>
		</div>
	</div>
` );
