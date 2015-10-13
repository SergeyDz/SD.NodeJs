import * as React from 'react';

const CommentList = React.createClass({displayName: "CommentList",
	render() {
		return (
			React.createElement("div", {className: "comment-list"}, 
				"Comment list" 
			)
		);
	}
});

