import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link } from 'react-router'

import {CommentTab} from './Comment.js'
import {UserTab} from './User.js'
import {RequestTab} from './Request.js'


const About = React.createClass({
render() {
    return <div>About</div>;
  }
})
const NoMatch = React.createClass({
render() {
    return <div>No match</div>;
  }
})

// Declarative route configuration (could also load this config lazily
// instead, all you really need is a single root route, you don't need to
// colocate the entire config).
render((
  <Router>
    <Route path="/">
      <Route path="about" component={About}/>
      <Route path="users" component={UserTab}/>
      <Route path="comments" component={CommentTab}/>
      <Route path="requests" component={RequestTab}/>
      <Route path="*" component={NoMatch}/>
    </Route>
  </Router>
), document.getElementById('content'))