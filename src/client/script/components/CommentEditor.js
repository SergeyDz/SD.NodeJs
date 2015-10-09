var CommentEditor = React.createClass({displayName: "CommentEditor",
	handleSubmit: function(e) {
		e.preventDefault();
		var author = this.refs.author.value.trim();
		var text = this.refs.text.value.trim();
		
		if (!text || !author) {
			return;
		}
		
		// TODO: send request to the server
		$.ajax({
			type: "POST",
			url: 'http://localhost:8080/api/comments',
			data: {
				Author: author, 
				Comment: text
		 	},
			success: function() {
				this.refs.author.value = '';
				this.refs.text.value = '';
			},
			dataType: 'application/json'
		});
		return;
	},
	
	render: function() {
		return (
			React.createElement("form", {className: "comment-editor", onSubmit: this.handleSubmit}, 
				React.createElement("div", null, 	
					React.createElement("textarea", {ref: "text"})
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