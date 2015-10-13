var Route = ReactRouter.Route;

var AppRouter = React.createClass({
  render: function() {
    return (
  <ReactRouter>
    <Route path="/" component={CommentTab}>
      <Route path="about" component={CommentTab}/>
      <Route path="comment" component={CommentTab}>
        <Route path="/comment/:commentId" component={CommentTab}/>
      </Route>
      <Route path="*" component={Comment}/>
    </Route>
  </ReactRouter>
);
  }
});
