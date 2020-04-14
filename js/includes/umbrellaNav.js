/* UMBRELLA NAV
 * An umbrella nav element that appears at the top of every page
 *
*/
var umbrellaNav = `
	<nav class="umbrella-nav">
		<div class="container">
			<ul 
				class="umbrella-nav__list"
				aria-label="Umbrella Nav"
			>
				<li class="umbrella-nav__item"><a class="umbrella-nav__link" href="http://theeeventscalendar.com">Home</a></li>
				<li class="umbrella-nav__item"><a class="umbrella-nav__link" href="https://theeventscalendar.com/knowledgebase/">Knowledgebase</a></li>
				<li class="umbrella-nav__item"><a class="umbrella-nav__link" href="https://docs.theeventscalendar.com/">DevDocs</a></li>
				<li class="umbrella-nav__item"><a class="umbrella-nav__link" href="https://translations.theeventscalendar.com/projects/">Translations</a></li>
				<li class="umbrella-nav__item"><a class="umbrella-nav__link is-current-page" href="http://support.theeventscalendar.com/">Support</a></li>
				<li class="umbrella-nav__item"><a class="umbrella-nav__link" href="https://demo.theeventscalendar.com/">Demo</a></li>
			</ul>
		</div>
	</nav>
`;

function addUmbrellaNav( content ) {
	$navbar.before( content )
}

addUmbrellaNav( umbrellaNav )