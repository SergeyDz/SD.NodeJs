var CommentList = React.createClass({
	render: function() {
		var nodes = this.props.data.map(function(comment) {
			return (
				<Comment Author={comment.Author} createdAt={comment.createdAt}>
					{comment.Comment}
				</Comment>
			);
		});
		return (
				<div className='comments-list'>
					{nodes}
				</div>
			);
	}
});