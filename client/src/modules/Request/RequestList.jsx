import React from 'react'
import  'kendo/kendo.all.js'


class RequestList extends React.Component
{
	constructor() 
	{
		super();
	}

	render() {
		window.kendo.jQuery('.request-list-container').kendoGrid({
			selectable: "multiple cell",
			allowCopy: true,
			columns: [
				{ field: "id" },
				{ field: "code" },
				{ field: "name" }
			],
			dataSource: 
				this.props.data
			
		});
		return <div className='request-list-container'/>
	}
}