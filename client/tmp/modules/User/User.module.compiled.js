"use strict";
var React = require("react").React;

var UserTab = React.createClass({displayName: "UserTab",
	render: function() {
		return (
			React.createElement("div", {className: "user-tab"}, 
				"User tab" 
			)
		);
	}
});
exports.UserTab = UserTab;