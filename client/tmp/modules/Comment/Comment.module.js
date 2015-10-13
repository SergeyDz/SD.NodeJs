import React from 'react';

const CommentList = React.createClass({displayName: "CommentList",
	render() {
		return (
			React.createElement("div", {className: "comment-list"}, 
				"Comment list" 
			)
		);
	}
});

;export const CommentTab = React.createClass({displayName: "CommentTab",
	render() {
		return (
			React.createElement("div", {className: "comment-tab"}, 
				React.createElement(CommentList, null)
			)
		);
	}
});

