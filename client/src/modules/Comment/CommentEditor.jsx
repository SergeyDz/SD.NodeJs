import React from 'react'

class CommentEditor extends React.Component
{
	constructor() 
	{
		super();
		this.handleSubmit = this.handleSubmit.bind(this);
		this.clear = this.clear.bind(this);
	}
	
	render() {
		return <div className='comment-editor'>
					<h4>Editor</h4>
					<form onSubmit={this.handleSubmit}>
						<div><textarea ref='Comment' /></div>
						<div><input type='text' ref='Author' /></div>
						<div><input type='submit' value='Add'></input></div>
					</form>
				</div>
	}
	
	handleSubmit(e) {
		e.preventDefault();
		let author = this.refs.Author.value.trim();
		let comment = this.refs.Comment.value.trim();
		
		this.clear();
	}
	
	clear() {
		this.refs.Author.value = '';
		this.refs.Comment.value = '';
	}
}