# Tribe Helpdesk Scripts

Customizations written for the LiveAgent support portal.

LiveAgent actually allows any administrator to modify our custom JS and CSS 'at will', however this repository exists so that we can more easily track, review and polish our work before it goes live. Using version control for these assets also allows us to easily roll things back to an earlier revision if we make a mistake.

⚠ Bottom line: all changes to our custom LiveAgent JS and CSS need to flow through this repository!

### Get started

* Install everything you need with `npm install` 
* To compile, use:
	* `gulp scripts` _(JS only)_
	* `gulp styles` _(CSS only)_
	* `gulp build` _(JS **and** CSS)_
	* `gulp watch` _(to rebuild any time a change is detected)_

### Structure

* Global definitions belong in `global/` ... any files in here will be loaded first
* Third party libraries belong in `vendor/` ... any files in here will be loaded next of all
* Our main JS should live in `includes/` ... files in here will be loaded last of all
* _Everything_ is automatically wrapped - and executes within - a function that runs when the document is ready and within which `$` acts as an alias for `jQuery`

### Workflow for changes

* Create a feature (or fix) branch
* Ensure you recompile!
* Test things out on a spare LiveAgent install if appropriate
* Submit a pull request

### Deployment

* `dist/style.min.css` should be added to _Customer Portal → Settings → Design → Custom CSS_
* `dist/frontend.min.js` should be wrapped in `<script defer> </script>` tags and added to _Customer Portal → Settings → Tracking Codes → Before &lt;/BODY&gt;_
* There is also a `dist/frontend/js` file (which is concatenated but not minified) that can be used to aid debugging when necessary

