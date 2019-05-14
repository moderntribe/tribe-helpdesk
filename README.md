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

### Local Development and Testing

Since LiveAgent is a third party platform, developing locally can be a challenge. For that reason we have a copy of the production site contained within the `docs/` directory (so named to support a convention used by GitHub Pages).

Helper commands (assumes you are in the root directory of this repo):

* `bash utilities/view-static-site` will try to open the local site in your default browser
* `bash utilities/rebuild-local-copy` will wipe the `docs/` folder and rebuild it using the lastest production sources
* `bash utilities/fix-docs-dir-permissions` may be useful if your local Gulp has difficulties writing to the `docs/` folder

To utilize these tools you will need Docker. Note too that each time you run `gulp build` the resulting artifacts—the compiled JS and CSS—will also be copied across to the `docs/` directory.

If you do not have any success running the `view-static-site` command listed above, simply open docs/index.html in your browser by manually crafting a `file://` path.

### Workflow for changes

* Create a feature (or fix) branch
* Ensure you recompile!
* Test things out on a spare LiveAgent install if appropriate
* Submit a pull request

### Deployment

* Once you have merged your pull request into `master`, run `bot update liveagent frontend` in Slack to deploy the changes. _Note: S3 caching may cause a slight delay in seeing the changes live._

