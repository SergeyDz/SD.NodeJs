class CommentList extends React.Component
{
	render() {
		return React.createElement("div", null, 
					React.createElement("h4", null, "Hello from comment list 2"), 
					React.createElement(CommentEditor, null)
				)
	}
}