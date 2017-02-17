Register = React.createClass({
    
    getInitialState() {
    return  this.state={setvalue:'1' };
  	},
  	handleChange: function(event){
  		 console.log("change");
  		 var val = event.target;
  		
         //this.setState({setvalue: event.currentTarget.value});
     },
    componentDidMount: function(){
    	 $(document).ready(function() {$('select').material_select(); });
    },
	onSubmit(e) {
		e.preventDefault();
		var ele = $(e.target);
		var email = ele.find("#email").val();
		var password = ele.find("#password").val();
		var confirmPassword = ele.find("#confirmPassword").val();
		var admincode = ele.find("#admincode").val();
		var level =this.state.setvalue;
		var sel = document.getElementById('select1');
		console.log("Level is " + level);
		//console.log("Level is " + sel);
		if(password === confirmPassword && password !== "" && confirmPassword !== ""&&admincode==="palm270137") {
			var accountInfo = {
				email: email,
				password: password
			};
			Accounts.createUser(accountInfo, function(er) {
				if(er) {
					Materialize.toast(er.reason, 4000);
				} else {
					Meteor.loginWithPassword(email, password, function(er) {
						if(er) {
							Materialize.toast('Could not login. Get mad at the developer.', 4000);
						} else {
							//Redirect
							FlowRouter.go('/');
						}
					});
				}
			});
		} else {
			Materialize.toast('Your passwords dont match! or wrong admincode', 4000);
			//console.log("%s",value);
		}
    	
	},
	render() {
		return (
			
			<div className="row">
				<h4 className="text-center">Register Account</h4>
				<form onSubmit={this.onSubmit} className="col offset-s4 s4">
					<div className="row">
						<button className="waves-effect waves-light btn btn-block">Submit</button>
					</div>
					<div className="row">
						<div className="input-field col s12">
							<input id="email" type="text" className="validate" />
							<label htmlFor="email">Email</label>
						</div>
					</div>
					<div className="row">
						<div className="input-field col s12">
							<input id="password" type="password" className="validate" />
							<label htmlFor="password">Password</label>
						</div>
					</div>
					<div className="row">
						<div className="input-field col s12">
							<input id="confirmPassword" type="password" className="validate" />
							<label htmlFor="confirmPassword">Confirm Password</label>
						</div>
					</div>
					<div className="row">
						<div className="input-field col s12">
							<input id="admincode" type="password" className="validate" />
							<label htmlFor="admincode">adminCode</label>
						</div>
					</div>
					<div className="row">
						<div className="input-field col s12">
							<div>
								<select id="select1" name="selector"  defaultvalue={this.state.setvalue} onChange={this.handleChange} >
							      <option value="" disabled selected>Choose your class</option>
							      <option value="1">Operator </option>
							      <option value="2">Engineer</option>
							      <option value="3">CEO</option>
							    </select>
							    <label>Class Select</label>
						    </div>
						</div>
					</div>
					
				</form>
			</div>
		);
	}
});
