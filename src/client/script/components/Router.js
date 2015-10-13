var Route = ReactRouter.Route;

var AppRouter = React.createClass({displayName: "AppRouter",
  render: function() {
    return (
  React.createElement(ReactRouter, null, 
    React.createElement(Route, {path: "/", component: CommentTab}, 
      React.createElement(Route, {path: "about", component: CommentTab}), 
      React.createElement(Route, {path: "comment", component: CommentTab}, 
        React.createElement(Route, {path: "/comment/:commentId", component: CommentTab})
      ), 
      React.createElement(Route, {path: "*", component: Comment})
    )
  )
);
  }
});
