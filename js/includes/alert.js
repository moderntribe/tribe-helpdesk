/**
 * Adds an alert to the portal header.
 * 
 * The following shows the expected structure (as supported by our current CSS):
 * 
 * <div id="tribe-marketing-alert">
 *     <div class="tribe-marketing-alert__content">
 *         <p>
 *             <span class="emoji">⚠️ Heads up!</span>
 *			   Response times for support requests are a little longer than usual. Please expect up to 3 business days for a reply.
 *         </p>
 *     </div>
 * </div>
 */
function addAlert( message ) {
	// Add the tribe-marketing-alert class to the body tag so we can style appropriately
	document.body.setAttribute( 'class', document.body.getAttribute( 'class' ) + ' tribe-marketing-alert' )
	// Add the actual message
	$navbar.after( message )
}

addAlert(`
	<div id="tribe-marketing-alert">
		<div class="tribe-marketing-alert__content">
			<p>
				<span class="emoji">🎄 Heads up!</span>
				Our team is enjoying some end of year time off, so response times may be slower than usual.
			</p>
		</div>
	</div>
`);
