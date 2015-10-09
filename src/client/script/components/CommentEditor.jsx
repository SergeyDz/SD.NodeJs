var CommentEditor = React.createClass({
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
			<form className='comment-editor' onSubmit={this.handleSubmit}>
				<div>	
					<textarea ref='text'/>
				</div>
				<div>
					<input type='text' ref='author' required />
				</div>
				<div>
					<input type="submit" value="Post" />
				</div>
			</form>
		);
	}
});