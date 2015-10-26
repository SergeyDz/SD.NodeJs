import {ActiveRecord} from './Model';

class CommentModel extends ActiveRecord {
	constructor(options) {
		super(options);
	}
};import React from 'react'
import Time from 'react-time'

class Comment extends React.Component
{
	render() {
		return  React.createElement("div", {className: "comment-view"}, 
					React.createElement("div", null, this.props.Author, " -",  
						React.createElement(Time, {value: this.props.createdAt, format: "YYYY/MM/DD HH:mm:ss"})
					), 
					React.createElement("div", null, this.props.Comment)
				)
	}
};class CommentEditor extends React.Component
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
		
		this.props.onSubmit({Author: author, Comment: comment });
		
		this.clear();
	}
	
	clear() {
		this.refs.Author.value = '';
		this.refs.Comment.value = '';
	}
};class CommentList extends React.Component
{
	render() {
		let nodes = this.props.data.map((comment) => {
			return 	React.createElement("div", null, 
						React.createElement(Comment, {Author: comment.Author, 
							Comment: comment.Comment, 
							createdAt: comment.createdAt}
						)
					)
		});
		return React.createElement("div", null, 
					React.createElement("h4", null, "Comments"), 
					nodes
				)
	}
};export class CommentTab extends React.Component
{
	constructor() {
		super();
		
		this.state = this.getInitialState();
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	getInitialState() {
		return { data: [] };
	} 
	
	componentDidMount() {
		this.loadCommentListFromApi();
	}
	
	loadCommentListFromApi() {
		CommentModel.getList({ url: 'http://localhost:8080/api/comments'})
		.then( (data) =>  {
				this.setState({data: data});
			} );
	}
	
	render() {
		return	React.createElement("div", {className: "comment-tab"}, 
					React.createElement(CommentEditor, {onSubmit: this.handleSubmit}), 
					React.createElement(CommentList, {data: this.state.data})
				)
	}
	
	handleSubmit(comment) {
		let record = new CommentModel({
				url: 'http://localhost:8080/api/comments'
			});
			
		record.save(comment).then(() => { this.loadCommentListFromApi(); })
	}
}

