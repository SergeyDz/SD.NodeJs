var CommentList = React.createClass({displayName: "CommentList",
	render: function() {
		var nodes = this.props.data.map(function(comment) {
			return (
				React.createElement(Comment, {Author: comment.Author}, 
					comment.Comment
				)
			);
		});
		return (
				React.createElement("div", {className: "comments-list"}, 
					nodes
				)
			);
	}
});