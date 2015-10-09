var CommentTab = React.createClass({displayName: "CommentTab",
	render: function() {
		return (
			 React.createElement("div", {className: "commentBox"}, 
				React.createElement("h1", null, "Comments"), 
				React.createElement(CommentEditor, null), 
				React.createElement(CommentList, {data: this.props.data})
			)
			);
	}
});