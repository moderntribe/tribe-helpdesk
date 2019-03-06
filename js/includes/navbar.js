// Adds a link back to TEC.com in the main menu.
addMainSiteLink( `
	<li><a href="https://theeventscalendar.com">Main Site</a></li>
` )

function addMainSiteLink( link ) {
	$navItemTickets.before( link )
}