var Comment = React.createClass({displayName: "Comment",
	render: function() {
		return (
				React.createElement("div", {className: "comment"}, 
					React.createElement("h4", {className: "commit-author"}, 
						this.props.Author
					), 
					this.props.children
				)
			);
	}
});