var Comment = React.createClass({
	render: function() {
		return (
				<div className='comment'>
					<h4 className='commit-author'>
						{this.props.Author}
					</h4>
					{this.props.children}
				</div>
			);
	}
});