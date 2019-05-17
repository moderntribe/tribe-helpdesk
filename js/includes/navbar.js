// Adds a link to Support and link it to the LA homepage.
addSupportSiteLink( `
	<li><a href="https://support.theeventscalendar.com">Support</a></li>
` )

function addSupportSiteLink( link ) {
	$navItemTickets.before( link )
}

// Update logo to link to TEC.com
$( ".navbar-brand.KBLogo" ).attr({
	target: '_blank',
	href: 'https://theeventscalendar.com',
	rel: 'noopener noreferrer'
});