var CommentEditor = React.createClass({displayName: "CommentEditor",
	handleSubmit: function(e) {
		e.preventDefault();
		var author = this.refs.author.value.trim();
		var text = this.refs.text.value.trim();
		
		if (!text || !author) {
			return;
		}
		
		var comment = {
				Author: author, 
				Comment: text
		 	};
		
		this.props.onCommentSubmit(comment);
		this.clear();
		return;
	},
	
	clear: function(){
		this.refs.author.value = '';
		this.refs.text.value = '';
	},
	
	render: function() {
		return (
			React.createElement("form", {className: "comment-editor", onSubmit: this.handleSubmit}, 
				React.createElement("div", null, 	
					React.createElement("textarea", {ref: "text", required: true})
				), 
				React.createElement("div", null, 
					React.createElement("input", {type: "text", ref: "author", required: true})
				), 
				React.createElement("div", null, 
					React.createElement("input", {type: "submit", value: "Post"})
				)
			)
		);
	}
});