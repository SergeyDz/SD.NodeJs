var CommentEditor = React.createClass({
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
			<form className='comment-editor' onSubmit={this.handleSubmit}>
				<div>	
					<textarea ref='text' className='comment-text' required/>
				</div>
				<div>
					<input type='text' ref='author' className='comment-author' required />
				</div>
				<div>
					<input type="submit" value="Post" />
				</div>
			</form>
		);
	}
});