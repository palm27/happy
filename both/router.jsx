// Reaktor API:  https://github.com/kadirahq/meteor-reaktor
// Router API:   https://github.com/meteorhacks/flow-router

// NOTE see flow-router branch for the vanilla router

Reaktor.init(
  <Router>
    <Route path="/" content={Home} layout={MainLayout} />
    <Route path="/monitor" content={Monitor} layout={MainLayout} />
    <Route path="/register" content={Register} layout={MainLayout} triggersEnter = {isLoggedIn}/>
    <Route path="/login" content={Login} layout={MainLayout} triggersEnter = {isLoggedIn} />

  </Router>
);
function isLoggedIn(context,doRedirect){
	if(User.isLoggedIn())
	{
		doRedirect("/");
	}
}
// Reaktor doensn't have a notFound component yet
FlowRouter.notFound = {
  action() {
    ReactLayout.render(MainLayout, { content: <NotFound /> });
  }
};
