export class CommentTab extends React.Component
{
	render() {
		return	React.createElement("div", {className: "comment-tab"}, 
					React.createElement(CommentList, null)
				)
	}
}

