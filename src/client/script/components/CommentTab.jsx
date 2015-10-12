var CommentTab = React.createClass({
	
	getInitialState: function() {
		return {data: []};
	},
	
	loadCommentListFromApi: function() {
		$.get(this.props.url)
			.success(function (data) {
				this.setState({data: data});
			}.bind(this));
	},
	
	handleCommentSubmit: function(comment) {
		// TODO: send request to the server
		$.post(this.props.url, comment)
			.success(function() {
				this.loadCommentListFromApi();
			}
			.bind(this));
	},
	
	componentDidMount: function(){
		this.loadCommentListFromApi();
	},
	
	render: function() {
		return (
			 <div className="commentBox">
				<h1>Comments</h1>
				<CommentEditor onCommentSubmit={this.handleCommentSubmit}/>
				<CommentList data={this.state.data}/>
			</div>
			);
	}
});