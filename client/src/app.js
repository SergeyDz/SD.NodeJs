import {CommentTab} from './Comment.js';
import React from 'react';

console.log('Entry point reached');

React.render(
  React.createElement(CommentTab, null),
  document.getElementById('content')
);