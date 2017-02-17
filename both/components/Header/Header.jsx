Header = React.createClass({
   getInitialState() {
    return { isLoggedIn: User.isLoggedIn() };
    },
  logout(){
      Meteor.logout((er)=>{
        if(er)
         {Materialize.toast(er.reason, 4000);}
        else
         this.setState({isLoggedIn: !this.state.isLoggedIn});
         {FlowRouter.go('/');}
        }.bind(this));
      
  },
  render() {
    var navStyle = {
      backgroundColor: "#f48fb1", 
      paddingLeft: "12px"
    };
    var navOption;
    if(User.isLoggedIn()){
        navOption=(
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><a href="/">Home</a></li>
            <li><a onClick={this.logout}>Logout</a></li>
          </ul>
        );
    }else{
        navOption=(
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><a href="/">Home</a></li>
            <li><a href="/login">Login</a></li>
            <li><a href="/register">Register</a></li>
          </ul>
        );
    }
    return (
      <nav style={navStyle}>
        <div className="nav-wrapper">
          <a href="/" className="brand-logo">HAPPY FARM</a>
          {navOption} 
        </div>
      </nav>
    );
  }
});
