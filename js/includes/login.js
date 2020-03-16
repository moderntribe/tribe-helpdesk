// Test to see if a logged out user is trying to login.
if ( isLoginPage && isLoggedOut ) {
	// Replace the username field label to make it clear that this must be an email address.
	$( '#login_usernamelabel' ).html( 'Your email address' );
}