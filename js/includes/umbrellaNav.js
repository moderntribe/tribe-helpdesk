/* UMBRELLA NAV
 * An umbrella nav element that appears at the top of every page
 *
*/
var umbrellaNav = `
	<nav class="umbrella-nav">
		<div class="container">
			<ul class="umbrella-nav__list">
				<li class="umbrella-nav__item"><a class="umbrella-nav__link" href="#">Home</a></li>
				<li class="umbrella-nav__item"><a class="umbrella-nav__link" href="#">Knowledgebase</a></li>
				<li class="umbrella-nav__item"><a class="umbrella-nav__link" href="#">DevDocs</a></li>
				<li class="umbrella-nav__item"><a class="umbrella-nav__link" href="#">Translations</a></li>
				<li class="umbrella-nav__item"><a class="umbrella-nav__link is-current-page" href="#">Support</a></li>
				<li class="umbrella-nav__item"><a class="umbrella-nav__link" href="#">Demo</a></li>
			</ul>
		</div>
	</nav>
`;

function addUmbrellaNav( content ) {
	$navbar.before( content )
}

addUmbrellaNav( umbrellaNav )