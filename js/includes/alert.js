function addAlert( message ) {
	// Add the tribe-marketing-alert class to the body tag so we can style appropriately
	document.body.setAttribute('class', document.body.getAttribute('class') + ' tribe-marketing-alert')
	// Add the actual message
	$navbar.before( message )
}

addAlert( `
	<div id="tribe-marketing-alert">
		<div><span class="emoji">⚠️</span></div>
		<div>
			<strong>Heads up!</strong> 
			Response times for support requests are a little longer than usual. 
			Please expect up to 3 business days for a reply.
		</div>
	</div>
` )