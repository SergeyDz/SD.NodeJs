"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

;

var CommentList = _react2["default"].createClass({ displayName: "CommentList",
	render: function render() {
		return _react2["default"].createElement("div", { className: "comment-list" }, "Comment list");
	}
});

;var CommentTab = _react2["default"].createClass({ displayName: "CommentTab",
	render: function render() {
		return _react2["default"].createElement("div", { className: "comment-tab" }, _react2["default"].createElement(CommentList, null));
	}
});
exports.CommentTab = CommentTab;
