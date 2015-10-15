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
		return React.createElement("div", {className: "comment-editor"}, 
					React.createElement("h4", null, "Editor"), 
					React.createElement("form", {onSubmit: this.handleSubmit}, 
						React.createElement("div", null, React.createElement("textarea", {ref: "Comment"})), 
						React.createElement("div", null, React.createElement("input", {type: "text", ref: "Author"})), 
						React.createElement("div", null, React.createElement("input", {type: "submit", value: "Add"}))
					)
				)
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
};class CommentList extends React.Component
{
	render() {
		return React.createElement("div", null, 
					React.createElement("h4", null, "Hello from comment list 2"), 
					React.createElement(CommentEditor, null)
				)
	}
};export class CommentTab extends React.Component
{
	render() {
		return	React.createElement("div", {className: "comment-tab"}, 
					React.createElement(CommentList, null)
				)
	}
}

;class CommentView extends React.Component
{
	render() {
		return  React.createElement("div", {className: "comment-view"}, 
					React.createElement("div", null, this.props.Author, " - ", this.props.createdAt), 
					React.createElement("div", null, this.props.Comment)
				)
	}
}