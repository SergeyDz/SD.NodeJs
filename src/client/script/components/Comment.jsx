var Comment = React.createClass({
	render: function() {
		return (
				<div className='comment'>
					<div className='commit-author'>
						{this.props.Author} - {this.props.createdAt}
					</div>
					
					{this.props.children}
				</div>
			);
	}
});