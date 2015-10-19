class CommentList extends React.Component
{
	render() {
		let nodes = this.props.data.map((comment) => {
			return 	React.createElement("div", null, 
						React.createElement(Comment, {Author: comment.Author, 
							Comment: comment.Comment, 
							createdAt: comment.createdAt}
						)
					)
		});
		return React.createElement("div", null, 
					React.createElement("h4", null, "Comments"), 
					nodes
				)
	}
}