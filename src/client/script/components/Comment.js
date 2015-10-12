var Comment = React.createClass({displayName: "Comment",
	render: function() {
		return (
				React.createElement("div", {className: "comment"}, 
					React.createElement("div", {className: "commit-author"}, 
						this.props.Author, " - ", this.props.createdAt
					), 
					
					this.props.children
				)
			);
	}
});