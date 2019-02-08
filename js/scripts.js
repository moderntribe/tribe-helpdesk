( function() { 
	// Safety check: jQuery should be present, but this may change unexpectedly
	if ( 'function' !== typeof jQuery ) {
		return;
	}

// Marketing alert
var marketingAlert =
'<div id="tribe-marketing-alert">'
+ '<div><span class="emoji">⚠️</span></div>'
+ '<div><strong>Heads up!</strong> Response times for support requests are a little longer than usual. Please expect up to 3 business days for a reply.'
+ '</div></div>'

// Portals
var componentPortals = 
'<div class="portals">'
+	'<div class="portals__portal">'
+ 	'<div class="portals__icon">'
+ 	'<img src="https://theeventscalendar.com/content/themes/tribe-ecp/img/icons/icon-support-knowledgebase.png" />'
+ '</div>'
+ '<div class="portals__content">'
+ 	'<h2>Knowledgebase</h2>'
+ '<p>Articles and tutorials on everything from getting started to customizing the plugins, troubleshooting, integrations and more!</p>'
+ '<ul>'
+ 	'<li><a href="https://theeventscalendar.com/knowledgebase-category/primers/">Getting Started</a></li>'
+ 	'<li><a href="https://theeventscalendar.com/knowledgebase-category/errors/">Troubleshooting</a></li>'
+ 	'<li><a href="https://theeventscalendar.com/knowledgebase/themers-guide/">Customizations</a></li>'
+ '</ul>'
+ '<a href="https://theeventscalendar.com/knowledgebase/" class="button button--primary">Browse Articles</a>'
+ '</div>'
+ '</div>'
+ '<div class="portals__portal">'
+ 	'<div class="portals__icon">'
+ 		'<img src="https://theeventscalendar.com/content/themes/tribe-ecp/img/icons/icon-support-docs.png" />'
+ 	'</div>'
+ 	'<div class="portals__content">'
+ 		'<h2>Technical Docs</h2>'
+ 		'<p>Documentation for everything under the hood of the plugins, including actions, filters, and example usages.</p>'
+ 		'<ul>'
+ 			'<li><a href="https://theeventscalendar.com/functions/">Functions & Template Tags</a></li>'
+ 			'<li><a href="https://theeventscalendar.com/plugin/the-events-calendar">The Events Calendar Docs</a></li>'
+ 			'<li><a href="https://theeventscalendar.com/plugin/event-tickets/">Event Tickets Docs</a></li>'
+ 		'</ul>'
+ 		'<a href="https://theeventscalendar.com/functions/" class="button button--primary">Visit Docs</a>'
+ 	'</div>'
+ '</div>'
+ '</div>'

var componentInterstitial = 
	'<div class="interstitial interstitial--primary">'
	+	'<div class="interstitial__icon">'
	+ 	'<img src="https://theeventscalendar.com/content/themes/tribe-ecp/img/icons/icon-support-forum.png">'
	+ '</div>'
	+ '<div class="interstitial__content">'
	+ 	'<h3>Looking for More Help?</h3>'
	+ 	'<p>If you have looked through the documentation and knowledgebase and still have questions, then reach out to our friendly support staff and we will help you out.</p>'
	+ 	'<div class="interstitial__actions">'
	+ 		'<a href="https://support.theeventscalendar.com/submit_ticket" class="button button--secondary">Open Ticket</a>'
	+ 		'<a href="" class="interstitial__text-link">Log into your account</a>'
	+ 	'</div>'
	+ '</div>'
+ '</div>'

jQuery( function( $ ) { 

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
	
	var navbarClass = $( '.navbar' )
	var jumbotron = $( '.jumbotron' )
	var marginTop = $( '.container.inner-margin-top' )
	var marketingClass = $( '#tribe-marketing-alert' )
	var portalsClass = $( '.portals' )
	var footerClass = $( 'footer' ).addClass( 'footer' )

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
		// Add the actual message
		navbarClass.after( message )
	}

	function addComponentPortals( content ) {
		jumbotron.after( content )
	}

	function addComponentInterstitial( content ) {
		footerClass.before( content )
	}

	function addJumbotronMessage( message ) {
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
	addComponentPortals( componentPortals )
	addComponentInterstitial( componentInterstitial )

	document.body.dispatchEvent( new Event( 'tribe-liveagent.ready' ) );
} )

// Gists oEmbed
!function(t){"use strict";function e(t){var e,i,n=[];if("number"==typeof t)n.push(t);else{i=t.split(",");for(var s=0;s<i.length;s++)if(2===(e=i[s].split("-")).length)for(var a=parseInt(e[0],10);a<=e[1];a++)n.push(a);else 1===e.length&&n.push(parseInt(e[0],10))}return n}var i={};t.fn.gist=function(n){return this.each(function(){var s,a,l,o,r,d,c,f,h,p,u,g,m,b=t(this),y={};if(b.css("display","block"),s=b.data("gist-id")||"",l=b.data("gist-file"),o=b.data("gist-caption"),h=!0===b.data("gist-hide-footer"),p=!0===b.data("gist-hide-line-numbers"),r=b.data("gist-line"),d=b.data("gist-lines-expanded"),f=b.data("gist-highlight-line"),u=!(g=!0===b.data("gist-show-spinner"))&&(void 0===b.data("gist-show-loading")||b.data("gist-show-loading")),l&&(y.file=l),!s)return!1;function v(i){var n,s,l,c,u;if(i&&i.div){if(i.stylesheet&&(0===i.stylesheet.indexOf("<link")?i.stylesheet=i.stylesheet.replace(/\\/g,"").match(/href=\"([^\s]*)\"/)[1]:0!==i.stylesheet.indexOf("http")&&(0!==i.stylesheet.indexOf("/")&&(i.stylesheet="/"+i.stylesheet),i.stylesheet="https://gist.github.com"+i.stylesheet)),i.stylesheet&&0===t('link[href="'+i.stylesheet+'"]').length&&(n=document.createElement("link"),s=document.getElementsByTagName("head")[0],n.type="text/css",n.rel="stylesheet",n.href=i.stylesheet,s.insertBefore(n,s.firstChild)),(u=t(i.div)).removeAttr("id"),b.html("").append(u),f&&(c=e(f),u.find("td.line-data").css({width:"100%"}),u.find(".js-file-line").each(function(e){-1!==t.inArray(e+1,c)&&t(this).css({"background-color":"rgb(255, 255, 204)"})})),r){l=e(r);var g=[];if(u.find(".js-file-line").each(function(e){-1===t.inArray(e+1,l)&&(d?(g.push(e+1),t(this).parent().hide()):t(this).parent().remove())}),d){var m=function(t,e){if(0===t.length)return[];return t.slice(1).reduce(function(t,i){return e(i)?t.push([i]):t.push(t.pop().concat([i])),t},[t.slice(0,1)])}(g,function(t){return!g.includes(t-1)});t.each(m,function(e,i){var n=i[0],s=n-1,a=i[i.length-1],l=t("<a></<a>");l.attr("lines",i.join()).css({display:"block",cursor:"pointer"}).html('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 44" style="height: 15px; position: relative; top: 2px;"><path fill="#bbb" fill-rule="evenodd" d="M8.0066 16.05305v-7.6523c0-.82422-.47656-1.0273-1.0586-.4414l-3.5117 3.5039c-1.8789 1.875-4.6953-.94142-2.8164-2.8164L8.7215.61564c.68359-.67579 1.8008-.6797 2.4922 0l8.1641 8.0312c1.8789 1.875-.9375 4.6914-2.8164 2.8164l-3.5078-3.5039c-.58984-.58985-1.0625-.38673-1.0625.4414v27.30827c0 .82031.47656 1.0273 1.0586.44141l3.5117-3.5039c1.8789-1.875 4.6953.9375 2.8164 2.8164l-8.1016 8.0273c-.6836.6797-1.8008.6797-2.4922 0l-8.1641-8.0273c-1.8789-1.8789.9375-4.6914 2.8164-2.8164l3.5078 3.5039c.58984.58984 1.0625.38672 1.0625-.4414V16.05304z"/></svg>').on("click",function(e){e.preventDefault(),t(this).closest("tr").remove();var i=t(this);t("table.highlight").find("tr:hidden td[data-line-number]").each(function(e,n){if(r=i.attr("lines").split(","),-1===t.inArray(t(n).attr("data-line-number"),r))return!0;t(n).parent().show()})});var o=t("<td></td>").addClass("blob-num js-line-number collapsed").attr("style","background-color: #f9f9f9; color: #999; font-size: 12px; font-style: italic; text-align: center; padding-top: 5px !important; padding-bottom: 5px !important;").append(l),d=t("<td></td>").addClass("blob-code blob-code-inner js-file-line collapsed").attr("style","background-color: #f9f9f9; color: #999; font-size: 12px; font-style: italic; padding-top: 5px !important; padding-bottom: 5px !important;").html("... Lines "+n+" - "+a),c=t("<tr></tr>").append(o).append(d);u.find(".js-line-number[data-line-number="+s+"]").parent().after(c)})}}if(o){var y=u.find("table tbody"),v=t("<tr></tr>"),x=t("<td></td>").attr("style","padding: 10px !important; border-bottom: 10px solid white; background-color: #f9f9f9; font-weight: bold;").html(o);v.append(t('<td style="background-color: #f9f9f9; border-bottom: 10px solid white;"></td>')),v.append(x),y.prepend(v)}h&&(u.find(".gist-meta").remove(),u.find(".gist-data").css("border-bottom","0px"),u.find(".gist-file").css("border-bottom","1px solid #ddd")),p&&u.find(".js-line-number").remove()}else b.html("Failed loading gist "+a)}function x(t){b.html("Failed loading gist "+a+": "+t)}function w(){"function"==typeof n&&n()}a="https://gist.github.com/"+s+".json",m=!0===b.data("gist-enable-cache")||i[a],c="Loading gist "+a+(y.file?", file: "+y.file:"")+"...",u&&b.html(c),g&&b.html('<img style="display:block;margin-left:auto;margin-right:auto"  alt="'+c+'" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif">'),t.ajax({url:a,data:y,dataType:"jsonp",timeout:2e4,beforeSend:function(){if(m){if(i[a])return i[a].then(function(t){v(t),w()},function(t){x(t)}),!1;i[a]=t.Deferred()}},success:function(t){m&&i[a]&&i[a].resolve(t),v(t)},error:function(t,e){x(e)},complete:function(){w()}})})},t(function(){t("[data-gist-id]").gist()})}(jQuery);
} )()