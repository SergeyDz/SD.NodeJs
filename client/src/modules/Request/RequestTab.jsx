export class RequestTab extends React.Component
{
	constructor() {
		super();
		
		this.state = this.getInitialState();
	}

	getInitialState() {
		return { data: [] };
	} 
	
	componentDidMount() {
		this.loadListFromApi();
	}
	
	loadListFromApi() {
		RequestListModel.getList({ url: 'http://localhost:8080/api/requests'})
		.then( (data) =>  {
				this.setState({data: data});
			} );
	}
	
	render() {
		return	<div className='request-tab'>
					<RequestList data={this.state.data} />
				</div>
	}
}

