export class CommentTab extends React.Component
{
	constructor() {
		super();
		this.setState = this.setState.bind(this);
		this.getInitialState = this.getInitialState.bind(this);
		this.loadCommentListFromApi = this.loadCommentListFromApi.bind(this);
		this.componentDidMount = this.componentDidMount.bind(this);
		
		this.state = this.getInitialState();
	}

	getInitialState() {
		return { data: [] };
	} 
	
	componentDidMount() {
		this.loadCommentListFromApi();
	}
	
	loadCommentListFromApi() {
		CommentModel.getList({ url: 'http://localhost:8080/api/comments',
			success: (data) =>  {
				this.setState({data: data});
			}
		 });
	}
	
	render() {
		return	<div className='comment-tab'>
					<CommentEditor onSubmit={this.handleSubmit} />
					<CommentList data={this.state.data} />
				</div>
	}
	
	handleSubmit(comment) {
		let record = new CommentModel({
				url: 'http://localhost:8080/api/comments'
			});
		
		record.save({
			model: comment,
			success: () => { console.log('record added'); }
		});
	}
}

