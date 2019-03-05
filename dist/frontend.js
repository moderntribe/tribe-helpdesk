"use strict";

(function () {
  // Safety check: we expect jQuery to be present, but this may change unexpectedly
  if ('function' !== typeof jQuery) {
    return;
  }

  jQuery(function ($) {
    // Marketing alert
    var marketingAlert = "\n\t<div id=\"tribe-marketing-alert\">\n\t\t<div><span class=\"emoji\">\u26A0\uFE0F</span></div>\n\t\t<div>\n\t\t\t<strong>Heads up!</strong> \n\t\t\tResponse times for support requests are a little longer than usual. \n\t\t\tPlease expect up to 3 business days for a reply.\n\t\t</div>\n\t</div>\n"; // Some general advice we'll show as needed in the jumbotron area

    var loggedOutUsersAdvice = "\n\t<p class=\"tribe-support-advice\"> \n\t\t<strong>Existing customer? To receive the fastest support possible,\n\t\tplease <a href=\"https://support.theeventscalendar.com/login\">login</a> before posting.</strong>\n\t\tIn some cases, you may need to register first of all: be sure to do so using the same email address \n\t\tyou used when purchasing your license key!\n\t</p>\n\t<p class=\"tribe-support-advice\">\n\t\tTo learn more about accessing support or if you experience any problems, please refer to\n\t\t<a href=\"https://support.theeventscalendar.com/812859-Accessing-Support\">this article</a>.\n\t</p>\n"; // Login form advice

    var loginFormAdvice = "\n\t<p class=\"tribe-support-advice\">\n\t\t\u26A0 Please note that your login credentials for <a href=\"https://theeventscalendar.com\">theeventscalendar.com</a> \n\t\twill not work here! Our Help Desk runs on a different platform and a separate account is needed.\n\t</p>\n\t<p class=\"tribe-support-advice\">\n\t\tWe do automatically link accounts where possible, though. So, for most customers, if you first login to \n\t\t<a href=\"https://theeventscalendar.com\">theeventscalendar.com</a> you should be automatically logged in here, \n\t\ttoo. If you find that doesn&#146;t work for you, please try a password reset in the first instance or else \n\t\tregister for a new account.\n\t</p>\n\t<p class=\"tribe-support-advice\">\n\t\tBe sure to use the same email address as you used when purchasing your license key!\n\t</p>\n"; // Logged in landing header advice

    var loggedInLanderPageAdvice = "\n\t<p class=\"tribe-support-advice\">\n\t\tWe&#146;re here to help with all of your questions about Modern Tribe&#146;s event and ticketing solutions.\n\t</p>\n\t<p class=\"tribe-support-advice\">\n\t\tWhether you need some tips to get the most from your calendar or are experiencing an unexpected bug or conflict, \n\t\twe&#146;ll do our very best to help you. Please note that at busy periods there may be a delay of upto 48 hours \n\t\tbefore we can reply.\n\t</p>\n"; // "Jumbotron" heading element

    var $jumbotronHeading = $('.jumbotron h1'); // This form currently is embedded in the portal homepage

    var $presalesForm = $('#presales-form'); // Test if the current user appears to be logged in

    var isLoggedIn = $('#menu-item-user').length === 1; // Reverse of the above, to help us write cleaner conditionals

    var isLoggedOut = !isLoggedIn; // We'll use this for further comparisons

    var currentUrl = getCurrentUrl(); // Test if we're on the support portal homepage

    var isHomePage = 'support.theeventscalendar.com' === currentUrl; // Test if we're on the login page

    var isLoginPage = currentUrl.match(/login/) !== null; // Test if we're on the My Tickets page

    var isMyTicketsPage = currentUrl.match(/my_tickets/) !== null; // Test if we're on the Submit Ticket page

    var isSubmitTicketPage = currentUrl.match(/submit_ticket/) !== null;
    var $marginTop = $('.container.inner-margin-top');
    /**
     * Return the page URL, but with any trailing slashes and the protocol 
     * ("http://" or "https://") stripped for safer comparisons.
     */

    function getCurrentUrl() {
      var url = document.location.toString();
      var protocolSeparator = url.match(/:\/\//); // Remove trailing slash for uniformity

      if ('/' === url.slice(-1)) {
        url = url.slice(0, -1);
      } // Remove the protocol


      if (protocolSeparator !== null) {
        url = url.slice(protocolSeparator.index + 3);
      }

      return url;
    }

    function addMarketingAlert(message) {
      // Add the tribe-marketing-alert class to the body tag so we can style appropriately
      document.body.setAttribute('class', document.body.getAttribute('class') + ' tribe-marketing-alert'); // Add the actual message

      $marginTop.before(message);
    }

    function addAccountHelperText() {
      // No jumbotron? Weird! Let's bail rather than try to inject content into a 
      // potentially modified/updated template
      if ($jumbotronHeading.length !== 1) {
        return;
      } // Lander page advice for logged in users


      if (isLoggedIn && isHomePage) {
        addJumbotronMessage(loggedInLanderPageAdvice);
      } // If the user is logged out and is visiting a page where the login form appears, add
      // appropriate advice 
      else if (isLoggedOut && (isLoginPage || isSubmitTicketPage || isMyTicketsPage)) {
          addJumbotronMessage(loginFormAdvice);
        } // If the user is logged out and is visiting the home page (where the login form *does not*
        // appear), apply different wording
        else if (isLoggedOut && isHomePage) {
            addJumbotronMessage(loggedOutUsersAdvice);
          }
    }

    function addJumbotronMessage(message) {
      // Add the tribe-jumbotron-message class to the body tag so we can style appropriately
      document.body.setAttribute('class', document.body.getAttribute('class') + ' tribe-jumbotron-message'); // Add the actual message

      $jumbotronHeading.after(message);
    }

    function optionallyRemovePresalesForm() {
      // If the user is not logged in or else if the presales form can't be located
      // we should not interfere
      if (!isLoggedIn || $presalesForm.length !== 1) {
        return;
      }

      $presalesForm.hide();
    }

    addAccountHelperText();
    optionallyRemovePresalesForm(); // "Jumbotron" heading element

    var $jumbotronHeading = $('.jumbotron h1'); // This form currently is embedded in the portal homepage

    var $presalesForm = $('#presales-form'); // Test if the current user appears to be logged in

    var isLoggedIn = $('#menu-item-user').length === 1; // Reverse of the above, to help us write cleaner conditionals

    var isLoggedOut = !isLoggedIn; // We'll use this for further comparisons

    var currentUrl = getCurrentUrl(); // Test if we're on the support portal homepage

    var isHomePage = 'support.theeventscalendar.com' === currentUrl; // Test if we're on the login page

    var isLoginPage = currentUrl.match(/login/) !== null; // Test if we're on the My Tickets page

    var isMyTicketsPage = currentUrl.match(/my_tickets/) !== null; // Test if we're on the Submit Ticket page

    var isSubmitTicketPage = currentUrl.match(/submit_ticket/) !== null;
    var marginTop = $('.container.inner-margin-top');
    /**
     * Return the page URL, but with any trailing slashes and the protocol 
     * ("http://" or "https://") stripped for safer comparisons.
     */

    function getCurrentUrl() {
      var url = document.location.toString();
      var protocolSeparator = url.match(/:\/\//); // Remove trailing slash for uniformity

      if ('/' === url.slice(-1)) {
        url = url.slice(0, -1);
      } // Remove the protocol


      if (protocolSeparator !== null) {
        url = url.slice(protocolSeparator.index + 3);
      }

      return url;
    }

    function addJumbotronMessage(message) {
      // Add the tribe-jumbotron-message class to the body tag so we can style appropriately
      document.body.setAttribute('class', document.body.getAttribute('class') + ' tribe-jumbotron-message'); // Add the actual message

      $jumbotronHeading.after(message);
    }
    /**
     * Finds and removes any category boxes that are devoid of articles.
     * 
     * Unsure why LiveAgent even renders these, but it's not particularly
     * useful so we'll default to getting rid of them.
     */


    $('.category-list').find('.alert.alert-empty').each(function () {
      $(this).parents('.col-md-4.col-sm-6').hide();
    }); // Popular Search Items

    var jumbotronSearch = "\n\t<div class=\"jumbotron__search\">\n\t\t<ul>\n\t\t\t<li><strong>Popular:</strong></li>\n\t\t\t<li><a href=\"https://support.theeventscalendar.com/934573-Inserting-Calendar-Content-into-Posts-or-Pages\">Shortcodes</a></li>\n\t\t\t<li><a href=\"https://theeventscalendar.com/functions/\">Documentation</a></li>\n\t\t\t<li><a href=\"https://theeventscalendar.com/customizations/\">Customization</a></li>\n\t\t\t<li><a href=\"https://theeventscalendar.com/subscription-information/\">Orders</a></li>\n\t\t</ul>\n\t</div>\n";
    var componentFeaturedContent = "\n\t<section class=\"featured-content\">\n\t\t<div class=\"featured-content__wrapper\">\n\t \t<a href=\"https://support.theeventscalendar.com/153124-Themers-Guide\">\n\t \t\t<article class=\"featured-content__item\">\n\t \t\t\t<div class=\"featured-content__icon\">\n\t \t\t\t\t<img src=\"https://theeventscalendar.com/content/uploads/2016/07/icon-brush-85x85.png\" alt=\"\" />\n\t \t\t\t</div>\n\t \t\t\t<div class=\"featured-content__body\">\n\t\t\t\t\t\t<h4>Themers Guide</h4>\n\t\t\t\t\t\t<p>Every calendar view is a template that can be overridden in your theme.</p>\n\t \t\t\t</div>\n\t \t\t</article>\n\t\t\t</a>\n\t \t<a href=\"https://theeventscalendar.com/extensions/\">\n\t \t\t<article class=\"featured-content__item\">\n\t \t\t\t<div class=\"featured-content__icon\">\n\t \t\t\t\t<img src=\"https://theeventscalendar.com/content/uploads/2016/07/extensions-85x85.png\" alt=\"\" />\n\t \t\t\t</div>\n\t \t\t\t<div class=\"featured-content__body\">\n\t\t\t\t\t\t<h4>Extension Library</h4>\n\t\t\t\t\t\t<p>Check out free mini-plugins to add additional features and settings to our plugins.</p>\n\t \t\t\t</div>\n\t \t\t</article>\n\t\t\t</a>\n\t \t<a href=\"https://theeventscalendar.com/content/uploads/2016/07/icon-code-1-85x85.png\">\n\t \t\t<article class=\"featured-content__item\">\n\t \t\t\t<div class=\"featured-content__icon\">\n\t \t\t\t\t<img src=\"https://theeventscalendar.com/content/uploads/2016/07/icon-code-1-85x85.png\" alt=\"\" />\n\t \t\t\t</div>\n\t \t\t\t<div class=\"featured-content__body\">\n\t\t\t\t\t\t<h4>Plugin Functions</h4>\n\t\t\t\t\t\t<p>Every available function in our products to use as filters for custom functionality.</p>\n\t \t\t\t</div>\n\t \t\t</article>\n\t\t\t</a>\n\t \t<a href=\"https://support.theeventscalendar.com/527363-Refund-policy\">\n\t \t\t<article class=\"featured-content__item\">\n\t \t\t\t<div class=\"featured-content__icon\">\n\t \t\t\t\t<img src=\"https://theeventscalendar.com/content/uploads/2019/02/icon-return.png\" alt=\"\" />\n\t \t\t\t</div>\n\t \t\t\t<div class=\"featured-content__body\">\n\t\t\t\t\t\t<h4>Orders & Refunds</h4>\n\t\t\t\t\t\t<p>Is the plugin not right for your project? Heres info on orders and refund requests.</p>\n\t \t\t\t</div>\n\t \t\t</article>\n\t\t\t</a>\n\t\t</div>\n\t</section>\n"; // Portals

    var componentPortals = "\n\t<div class=\"portals\">\n\t\t<div class=\"portals__portal\">\n\t\t\t<div class=\"portals__icon\">\n\t\t\t<img src=\"https://theeventscalendar.com/content/themes/tribe-ecp/img/icons/icon-support-knowledgebase.png\" />\n\t\t</div>\n\t\t<div class=\"portals__content\">\n\t\t\t<h2>Getting Started</h2>\n\t\t<p>Articles and tutorials on everything from getting started to customizing the plugins, troubleshooting, integrations and more!</p>\n\t\t<ul>\n\t\t\t<li><a href=\"https://support.theeventscalendar.com/342672-New-User-Primer-The-Events-Calendar-and-Events-Calendar-PRO\">The Events Calendar</a></li>\n\t\t\t<li><a href=\"https://support.theeventscalendar.com/259544-New-User-Primer-Event-Tickets--Event-Tickets-Plus\">Event Tickets</a></li>\n\t\t\t<li><a href=\"https://support.theeventscalendar.com/710770-New-User-Primer-Event-Aggregator\">Event Aggregator</a></li>\n\t\t\t<li><a href=\"https://support.theeventscalendar.com/890921-New-User-Primer-Community-Events\">Community Events</a></li>\n\t\t</ul>\n\t\t<a href=\"https://theeventscalendar.com/knowledgebase-category/primers/\" class=\"button button--primary\">All Guides</a>\n\t\t</div>\n\t\t</div>\n\t\t<div class=\"portals__portal\">\n\t\t\t<div class=\"portals__icon\">\n\t\t\t\t<img src=\"https://theeventscalendar.com/content/themes/tribe-ecp/img/icons/icon-support-docs.png\" />\n\t\t\t</div>\n\t\t\t<div class=\"portals__content\">\n\t\t\t\t<h2>Trending Topics</h2>\n\t\t\t\t<p>A few of the most popular guides folks are reading that you may also find helpful for getting the most from the plugins.</p>\n\t\t\t\t<ul>\n\t\t\t\t\t<li><a href=\"https://support.theeventscalendar.com/934573-Inserting-Calendar-Content-into-Posts-or-Pages\">Shortcodes</a></li>\n\t\t\t\t\t<li><a href=\"https://support.theeventscalendar.com/303643-Testing-for-conflicts\">Testing for Conflicts</a></li>\n\t\t\t\t\t<li><a href=\"https://theeventscalendar.com/customizations/\">Customization</a></li>\n\t\t\t\t\t<li><a href=\"https://support.theeventscalendar.com/969953-CSV-file-examples-for-importing\">Importing Events</a></li>\n\t\t\t\t</ul>\n\t\t\t\t<a href=\"https://theeventscalendar.com/functions/\" class=\"button button--primary\">Visit Docs</a>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n";
    var componentInterstitial = "\n\t<div class=\"interstitial\">\n\t\t<div class=\"interstitial__body interstitial--primary\">\n\t\t\t<div class=\"interstitial__icon\">\n\t\t\t\t<img src=\"https://theeventscalendar.com/content/themes/tribe-ecp/img/icons/icon-support-forum.png\">\n\t\t\t</div>\n\t\t\t<div class=\"interstitial__content\">\n\t\t\t\t<h3>Looking for More Help?</h3>\n\t\t\t\t<p>If you have looked through the documentation and knowledgebase and still have questions, then reach out to our friendly support staff and we will help you out.</p>\n\t\t\t\t<div class=\"interstitial__actions\">\n\t\t\t\t\t<a href=\"https://support.theeventscalendar.com/submit_ticket\" class=\"button button--secondary\">Open Ticket</a>\n\t\t\t\t\t<a href=\"https://wordpress.org/support/plugin/the-events-calendar/\" class=\"interstitial__text-link\">Free plugin support</a>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n";
    var categoryListHeading = "\n\t<div class=\"section-heading\">\n\t\t<h2>Guides & Tutorials</h2>\n\t</div>\n";
    var $navbarClass = $('.navbar');
    var $jumbotron = $('.jumbotron');
    var $jumbotronSearchField = $('.input-group');
    var $marginTop = $('.margin-top');
    var $categoryList = $('.category-list');
    var $marketingClass = $('#tribe-marketing-alert');
    var $featuredClass = $('.featured-content');
    var $portalsClass = $('.portals');
    var $footerClass = $('footer').addClass('footer');

    function addJumbotronSearch(content) {
      if (isHomePage === true) {
        $jumbotronSearchField.after(content);
      }
    }

    function addComponentFeaturedContent(content) {
      if (isHomePage === true) {
        $jumbotron.after(content);
      }
    }

    function addComponentPortals(content) {
      if (isHomePage === true) {
        $marginTop.before(content);
      }
    }

    function addCategoryHeading(heading) {
      if (isHomePage === true) {
        $categoryList.before(heading);
      }
    }

    function addComponentInterstitial(content) {
      if (isHomePage === true) {
        $footerClass.before(content);
      }
    }

    addMarketingAlert(marketingAlert);
    addJumbotronSearch(jumbotronSearch);
    addComponentFeaturedContent(componentFeaturedContent);
    addComponentPortals(componentPortals);
    addCategoryHeading(categoryListHeading);
    addComponentInterstitial(componentInterstitial);
  }); // End of jQuery document ready block
})(); // End of anonymous function wrapper