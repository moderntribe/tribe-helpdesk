// Custom fork of https://github.com/blairvanderhoof/gist-embed
// Targets elements with .sticky for sticky scrolling
jQuery.event.add(window, 'resize', stickyScroll);

function stickyScroll() {
	var $sticky = $( '.sticky' );
	var $stickyrStopper = $( '.ArticleInfo' );
	var viewportWidth = $(window).width();
	if ( !!$sticky.offset() ) { // make sure ".sticky" element exists
		
		var generalSidebarHeight = $sticky.innerHeight();
		var stickyTop = $sticky.offset().top;
		var stickOffset = 0;
		var stickyStopperPosition = $stickyrStopper.offset().top;
		var stopPoint = stickyStopperPosition - generalSidebarHeight - stickOffset;
		var diff = stopPoint + stickOffset;
		
		$(window).scroll(function(){ // scroll event
			var windowTop = $(window).scrollTop(); // returns number

			if (stopPoint < windowTop) {
					$sticky.css({ position: 'absolute', right: '0', top: diff });
			} else if (stickyTop < windowTop+stickOffset) {
					$sticky.css({ position: 'fixed', marginTop: '110px', right: '24px', top: stickOffset });
			} else {
					$sticky.css({ position: 'absolute', right: '0', marginTop: '0', top: 'initial' });
			}
		});
	}

}