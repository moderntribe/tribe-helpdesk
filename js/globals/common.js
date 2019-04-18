/**
 * Return the page URL, but with any trailing slashes and the protocol 
 * ("http://" or "https://") stripped for safer comparisons. The URL
 * query is also removed unless optional param includeQuery is true.
 * 
 * @param {boolean} includeQuery
 */
function getCurrentUrl( includeQuery = false ) {
	let url = document.location.toString()
	let protocolSeparator = url.match( /:\/\// )

	// Remove the protocol
	if ( protocolSeparator !== null ) {
		url = url.slice( protocolSeparator.index + 3 )
	}

	let querySeparator = url.match( /\?/ )

	// Remove the query
	if ( ! includeQuery && querySeparator !== null ) {
		url = url.slice( 0, querySeparator.index );
	}

	// Remove trailing slash for uniformity
	if ( '/' === url.slice( -1 ) ) {
		url = url.slice( 0, -1 )
	}

	return url;
}

// Common selectors used in multiple include files
var $categoryList = $( '.category-list' )
var $featuredContent = $( '.featured-content' )
var $footer = $( 'footer' ).addClass( 'footer' )
var $jumbotron = $( '.jumbotron' )
var $marginTop = $( '.margin-top' )
var $marketingAlert = $( '#tribe-marketing-alert' )
var $navbar = $( '.navbar' )
var $navItemTickets = $( '#menu-item-mytickets' )
var $presalesForm = $( '#presales-form' )
var $portals = $( '.portals' )

// Common definitions/properties
var currentUrl = getCurrentUrl()
var isHomePage = currentUrl.match(/\//) === null
var isLoggedIn = $( '#menu-item-user' ).length === 1
var isLoggedOut = ! isLoggedIn
var isLoginPage = currentUrl.match( /login/ ) !== null
var isMyTicketsPage = currentUrl.match( /my_tickets/ ) !== null
var isSubmitTicketPage = currentUrl.match( /submit_ticket/ ) !== null