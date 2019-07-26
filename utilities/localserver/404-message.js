exports.message404 = () => {
	return `
		<!DOCTYPE html>
		<html lang="en">
			<head>
				<meta charset="utf-8" />
				<title>404 error: document not found</title>
				<style>
					* {
						font-family: sans-serif;
						font-weight: normal;
					}

					body { 
						text-align: center;
					}

					h1, h2, p {
						margin: 1rem auto;
						max-width: 60rem;
					}

					h1 {
						color: red;
					}
					
					p {
						text-align: left;
					}

					code {
						font-family: monospace;
						background: #eee;
						padding: inherit 0.4rem;
					}
				</style>
			</head>
			<body>
				<h2>LiveAgent Local</h2>
				<h1>⚠ 404 Not Found</h1>
				<p>
					Unfortunately, we could not serve the requested resource.
					If the equivalent production URL works it may be that you
					need to rebuild the local docs directory via

					<code>bash utilities/rebuild-local-copy</code>

					(&hellip;if in doubt or if you cannot resolve this then 
					please reach out to a Crimson Team developer for coffee and 
					a chinwag).
				</p>
			</body>
		</html>
	`;
};