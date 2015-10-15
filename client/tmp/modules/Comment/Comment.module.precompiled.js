;import React from 'react';

var CommentList = React.createClass({displayName: "CommentList",
	render: function() {
		return (
			React.createElement("div", {className: "comment-list"}, 
				"Comment list" 
			)
		);
	}
});

;export var CommentTab = React.createClass({displayName: "CommentTab",
	render: function() {
		return (
			React.createElement("div", {className: "comment-tab"}, 
				React.createElement(CommentList, null)
			)
		);
	}
});

