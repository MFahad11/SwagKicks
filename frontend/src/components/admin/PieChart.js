import React from 'react'
import CanvasJSReact from '../../canvasjs.react';
const PieChart = () => {

var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

		const options = {
			animationEnabled: true,
			
			theme: "light1", //"light1", "dark1", "dark2"
			title:{
				text: "Orders"
			},
			data: [{
				type: "pie",
				indexLabel: "{label}: {y}%",		
				startAngle: -90,
				dataPoints: [
					{ y: 8, label: "Pending" },
					{ y: 7, label: "Deleted" },
					{ y: 2, label: "Delivered" }	
				]
			}]
		}
		
		return (
		<>
			<CanvasJSChart options = {options} 
				/* onRef={ref => this.chart = ref} */
			/>            
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</>
		)} 


export default PieChart