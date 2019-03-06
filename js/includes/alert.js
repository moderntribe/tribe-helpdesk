/**
 * Adds an alert to the portal homescreen.
 * 
 * The following shows the expected structure (as supported by our current CSS):
 * 
 *     <div id="tribe-marketing-alert">
 *         <div><span class="emoji">⚠️</span></div>
 *         <div>
 *             <strong>We want to help you!</strong> 
 *             Don't forget to search our knowledgebase and&mdash;where appropriate&mdash;perform
 *             <a href="https://support.theeventscalendar.com/303643-Testing-for-conflicts">basic troubleshooting</a>
 *             before creating a new support ticket!
 * 	       </div>
 *     </div>
 */
function addAlert( message ) {
	// Add the tribe-marketing-alert class to the body tag so we can style appropriately
	document.body.setAttribute('class', document.body.getAttribute('class') + ' tribe-marketing-alert')
	// Add the actual message
	$navbar.before( message )
}

addAlert( `
	<div id="tribe-marketing-alert">
		<div class="tribe-marketing-alert__content">
			<p><span class="emoji">⚠️ Heads up!</span>
			Response times for support requests are a little longer than usual. Please expect up to 3 business days for a reply.</p>
		</div>
	</div>
` )
}
