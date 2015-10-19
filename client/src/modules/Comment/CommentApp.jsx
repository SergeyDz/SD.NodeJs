import React from 'react'
import Time from 'react-time'

class Comment extends React.Component
{
	render() {
		return  <div className='comment-view'>
					<div>{this.props.Author} - 
						<Time value={this.props.createdAt} format='YYYY/MM/DD HH:mm:ss'/>
					</div>
					<div>{this.props.Comment}</div>
				</div>
	}
}