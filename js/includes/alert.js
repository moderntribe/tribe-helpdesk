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

// 2020-06-15 09:00:00 (Pacific) as a millisec-based timestamp.
//const takeDownTime = 1592236800000;

// Support notice regarding the Day of Action that took place on 2020-06-08.
// Take down automatically when the takeDownTime is reached.

//if ( ( takeDownTime - Date.now() ) > 0 ) {
	addAlert( `
		<div id="tribe-marketing-alert">
			<div class="tribe-marketing-alert__content">
				<p>
					<span class="emoji">⚠️ Heads up!</span>
					We're experiencing a higher than normal amount of support tickets at the moment. Rest assured, we'll get back to you as soon as we are able.
				</p>
			</div>
		</div>
	` );
//}
