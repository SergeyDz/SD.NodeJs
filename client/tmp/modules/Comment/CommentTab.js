export const CommentTab = React.createClass({displayName: "CommentTab",
	render() {
		return (
			React.createElement("div", {className: "comment-tab"}, 
				React.createElement(CommentList, null)
			)
		);
	}
});

