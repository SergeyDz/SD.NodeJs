var CommentTab = React.createClass({displayName: "CommentTab",
	
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
			 React.createElement("div", {className: "commentBox"}, 
				React.createElement("h1", null, "Comments"), 
				React.createElement(CommentEditor, {onCommentSubmit: this.handleCommentSubmit}), 
				React.createElement(CommentList, {data: this.state.data})
			)
			);
	}
});