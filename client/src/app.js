var CommentTab = require('./Comment.module.compiled.js').CommentTab;
var React = require('react');

console.log('Entry point reached');

React.render(
  React.createElement(CommentTab, null),
  document.getElementById('content')
);