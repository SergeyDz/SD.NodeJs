export class CommentTab extends React.Component
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

