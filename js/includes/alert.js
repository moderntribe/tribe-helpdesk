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

/* Remove this when the time comes */
addAlert( `
	<div id="tribe-marketing-alert">
		<div class="tribe-marketing-alert__content">
			<p>
				<span class="emoji">⚠️ </span>
				A hotfix to remedy the issues with some events not displaying correctly with the upgraded views has been released. More details can be found <a href="https://theeventscalendar.com/category/products/release-notes/">here</a>.
			</p>
		</div>
	</div>
` );
