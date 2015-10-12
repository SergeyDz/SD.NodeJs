var CommentTab = React.createClass({displayName: "CommentTab",
	
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
			 React.createElement("div", {className: "commentBox"}, 
				React.createElement("h1", null, "Comments"), 
				React.createElement(CommentEditor, null), 
				React.createElement(CommentList, {data: this.state.data})
			)
			);
	}
});