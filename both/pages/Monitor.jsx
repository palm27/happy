
var data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
        {
            label: "My First dataset",
            fillColor: "rgba(250,195,168,0.5)",
            strokeColor: "rgba(220,220,220,1)",
            pointColor: "rgba(250,195,168,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: [65, 59, 80, 81, 56, 55, 40]
        }
    ]
	};
Monitor= React.createClass({
	displayName: 'StatsWidget',
	
	render(){
		return(
		
		<div className="row">
			<h4 className="text-center">Monitor</h4>
			<canvas id="lineChart" width="400" height="400"></canvas>
			
			
	    </div>

		);
	}
});
