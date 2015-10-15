import {React} from 'react';

export var UserTab = React.createClass({displayName: "UserTab",
	render: function() {
		return (
			React.createElement("div", {className: "user-tab"}, 
				"User tab" 
			)
		);
	}
});

