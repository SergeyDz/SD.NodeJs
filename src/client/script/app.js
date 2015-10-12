(
	function () {
		'use strict';

		React.render(
					React.createElement(CommentTab, {url: 'http://localhost:8080/api/comments'}),
						document.getElementById('content')
					);

	}
	)();