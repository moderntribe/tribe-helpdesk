jQuery( function( $ ) { 
  // "Jumbotron" heading element
  var $jumbotronHeading = $( '.jumbotron h1' )

  // This form currently is embedded in the portal homepage
  var $presalesForm = $( '#presales-form' )

  // Test if the current user appears to be logged in
  var isLoggedIn = $( '#menu-item-user' ).length === 1

  // Reverse of the above, to help us write cleaner conditionals
  var isLoggedOut = ! isLoggedIn

  // We'll use this for further comparisons
  var currentUrl = getCurrentUrl()

  // Test if we're on the support portal homepage
  var isHomePage = 'support.theeventscalendar.com' === currentUrl

  // Test if we're on the login page
  var isLoginPage = currentUrl.match( /login/ ) !== null

  // Test if we're on the My Tickets page
  var isMyTicketsPage = currentUrl.match( /my_tickets/ ) !== null

  // Test if we're on the Submit Ticket page
  var isSubmitTicketPage = currentUrl.match( /submit_ticket/ ) !== null

  var marginTop = $( '.container.inner-margin-top' )

  /**
   * Return the page URL, but with any trailing slashes and the protocol 
   * ("http://" or "https://") stripped for safer comparisons.
   */
  function getCurrentUrl() {
    var url = document.location.toString()
    var protocolSeparator = url.match( /:\/\// )

    // Remove trailing slash for uniformity
    if ( '/' === url.slice( -1 ) ) {
      url = url.slice( 0, -1 )
    }

    // Remove the protocol
    if ( protocolSeparator !== null ) {
      url = url.slice( protocolSeparator.index + 3 )
    }

    return url;
  }

  function addMarketingAlert( message ) {
    // Add the tribe-marketing-alert class to the body tag so we can style appropriately
    document.body.setAttribute('class', document.body.getAttribute('class') + ' tribe-marketing-alert')
    // Add the actual message
    marginTop.before( message )
  }

  function addAccountHelperText() {
    // No jumbotron? Weird! Let's bail rather than try to inject content into a 
    // potentially modified/updated template
    if ( $jumbotronHeading.length !== 1 ) {
      return
    }

    // Lander page advice for logged in users
    if ( isLoggedIn && isHomePage ) {
      addJumbotronMessage( loggedInLanderPageAdvice )
    }
    // If the user is logged out and is visiting a page where the login form appears, add
    // appropriate advice 
    else if ( isLoggedOut && ( isLoginPage || isSubmitTicketPage || isMyTicketsPage ) ) {
      addJumbotronMessage( loginFormAdvice )
    }
    // If the user is logged out and is visiting the home page (where the login form *does not*
    // appear), apply different wording
    else if ( isLoggedOut && isHomePage ) {
      addJumbotronMessage( loggedOutUsersAdvice )
    }
  }

  function addJumbotronMessage( message ) {
    // Add the tribe-jumbotron-message class to the body tag so we can style appropriately
    document.body.setAttribute('class', document.body.getAttribute('class') + ' tribe-jumbotron-message')

    // Add the actual message
    $jumbotronHeading.after( message )
  }

  function optionallyRemovePresalesForm() {
    // If the user is not logged in or else if the presales form can't be located
    // we should not interfere
    if ( ! isLoggedIn || $presalesForm.length !== 1 ) {
      return
    }

    $presalesForm.hide()
  }

  addMarketingAlert( marketingAlert )
  addAccountHelperText()
  optionallyRemovePresalesForm()
} )