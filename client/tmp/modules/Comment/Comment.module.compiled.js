"use strict";
;var React = require("react")["default"];

var CommentList = React.createClass({displayName: "CommentList",
	render: function() {
		return (
			React.createElement("div", {className: "comment-list"}, 
				"Comment list" 
			)
		);
	}
});

;var CommentTab = React.createClass({displayName: "CommentTab",
	render: function() {
		return (
			React.createElement("div", {className: "comment-tab"}, 
				React.createElement(CommentList, null)
			)
		);
	}
});
exports.CommentTab = CommentTab;