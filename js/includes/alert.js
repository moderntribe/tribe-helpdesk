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