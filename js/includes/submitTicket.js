/**
 * Update Bootstrap classes on Submit Ticket Form to make room for sidebar
 * 
 */

if ( isLoggedIn && isSubmitTicketPage === true ) {
	$( '.page-submit_ticket' ).find( '.col-lg-10.col-md-12.col-lg-offset-1' ).each( function() {
		$( this ).removeClass( 'col-lg-10 col-md-12 col-lg-offset-1' ).addClass( 'submit-ticket__form col-md-8 ');
	} );
}

/**
 * Add helpful notes to Submit Ticket form
 * 
 * Request to add some helpful notes for users to open better tickets. 
 * Will hopefully reduce "back and forth" of the initial support process.
 * 
 */
var $submitTicketForm = $( '#SubmitTicketForm' ).parent();
var submitTicketSidebar = `
	<div class="submit-ticket__sidebar col-md-4">
		<h3>Psst... Want better support?</h3>
		<p>Get the most out of your support request by adding more details to the ticket.
		<ul>
			<li>Are all of your plugins updated to the <a href="https://tec.tribe/category/products/release-notes/" target="_blank" title="The Events Calendar Release Notes">Latest Version</a>?</li>
			<li>Copy and paste your <a href="https://support.theeventscalendar.com/244018-Sharing-Your-System-Information" target="_blank" title="Sharing your system information">System Information</a></li>
			<li>Outline any steps to replicate the issue</li>
			<li>Attach images that show the issue</li>
		</ul>
	</div>
`;

function addSubmitTicketSidebar( content ) {
	if ( isLoggedIn && isSubmitTicketPage === true ) {
		$submitTicketForm.after( content )
	}
}

addSubmitTicketSidebar( submitTicketSidebar )
