import React from 'react'

class Comment extends React.Component
{
	render() {
		return  <div className='comment-view'>
					<div>{this.props.Author} - {this.props.createdAt}</div>
					<div>{this.props.Comment}</div>
				</div>
	}
}