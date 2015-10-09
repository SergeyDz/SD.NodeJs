var CommentTab = React.createClass({
	render: function() {
		return (
			 <div className="commentBox">
				<h1>Comments</h1>
				<CommentEditor />
				<CommentList data={this.props.data}/>
			</div>
			);
	}
});