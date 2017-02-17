

Home= React.createClass({
	getInitialState() {
    return { isLoggedIn: User.isLoggedIn() };
    },
	render(){
		var link_mor;
		if(User.isLoggedIn()){
			link_mor=(<a href="http://localhost:3000/monitor">This is a link</a>);
		}
		else
		{
			link_mor=(<p></p>);
		}
		return(
			<div className="row">
				<h4 className="text-center">HOME</h4>
				<div className="col s12 ">
		          <div className="card blue-grey darken-1">
		          	<div className="card-image">
             		   <img src="http://openfarmweekend.com/wp-content/uploads/2016/03/rathmore-pig-farm.jpg" height="300"/>
             		   <span className="card-title">Pig farm</span>
          		    </div>
		            <div className="card-content white-text">
		              <span className="card-title">Pig farm</span>
		              <p>สนง.กระบี่
					     2/3 ถนนมหาราช ต.กระบี่ใหญ่  อ.เมืองกระบี่  จ.กระบี่ 81000
						 โทรศัพท์ : 0-7562-0232      |      แฟกซ์ : 0-7562-2874</p>
		            </div>
		            <div className="card-action">
		              {link_mor}
		            
		            </div>
		          </div>
		        </div>
		        <div className="col s12 ">
		          <div className="card blue-grey darken-1">
		          	<div className="card-image">
             		   <img src="http://photoshdwallpapers.com/wp-content/uploads/2016/02/Cow-Farm-Wallpaper-768x432.jpg" height="300"/>
             		   <span className="card-title">Cow farm</span>
          		    </div>
		            <div className="card-content white-text">
		              <span className="card-title">Cow farm</span>
		              <p>สนง.หาดใหญ่
47/1-3 ถนนโชติวิทยะกุล 3 ต.หาดใหญ่  อ.หาดใหญ่  จ.สงขลา  90110
โทรศัพท์ : 0-7422-1013-5, 0-7422-1034-6      |      แฟกซ์ : 0-7422-1037-8</p>
		            </div>
		            <div className="card-action">
		               {link_mor}
		              
		            </div>
		          </div>
		        </div>
		        <div className="col s12 ">
		          <div className="card blue-grey darken-1">
		          	<div className="card-image">
             		   <img src="http://www.farmerstrend.co.ke/wp-content/uploads/2016/06/chicken-farm.jpg" height="300"/>
             		   <span className="card-title">chicken-farm</span>
          		    </div>
		            <div className="card-content white-text">
		              <span className="card-title">chicken-farm</span>
		              <p>สนง.สุราษฎร์ธานี
41/15-16 หมู่ 1 ถนนกาญจนวิถี ต.บางกุ้ง อ.เมือง จ.สุราษฎร์ธานี 84000
โทรศัพท์ : 0-7720-4395-7, 0-7720-4494      |      แฟกซ์ : 0-7728-4669</p>
		            </div>
		            <div className="card-action">
		               {link_mor}
		  
		            </div>
		          </div>
		        </div>
			</div>


				
			);
	}
});
