var CommentTab = React.createClass({
	
	getInitialState: function() {
		return {data: []};
	},
	
	loadCommentListFromApi: function() {
		$.get('http://localhost:8080/api/comments')
			.success(function (data) {
				this.setState({data: data});
			}.bind(this));
	},
	
	componentDidMount: function(){
		this.loadCommentListFromApi();
	},
	
	render: function() {
		return (
			 <div className="commentBox">
				<h1>Comments</h1>
				<CommentEditor />
				<CommentList data={this.state.data}/>
			</div>
			);
	}
});