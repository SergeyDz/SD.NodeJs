class CommentList extends React.Component
{
	render() {
		let nodes = this.props.data.map((comment) => {
			return 	<div>
						<Comment Author={comment.Author} 
							Comment = {comment.Comment}
							createdAt = {comment.createdAt}
						/>
					</div>
		});
		return <div>
					<h4>Comments</h4>
					{nodes}
				</div>
	}
}