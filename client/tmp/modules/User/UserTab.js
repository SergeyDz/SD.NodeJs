import {React} from 'react';

export const UserTab = React.createClass({displayName: "UserTab",
	render() {
		return (
			React.createElement("div", {className: "user-tab"}, 
				"User tab" 
			)
		);
	}
});

