(
	function () {
		'use strict';

		$.get('http://localhost:8080/api/comments')
			.success(function (data) {
				React.render(
					React.createElement(CommentTab, {data:data}),
						document.getElementById('content')
					);

			});


	}
	)();