import React from 'react'
import CanvasJSReact from '../../canvasjs.react';
const BarChart = () => {

var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

		const options = {
			animationEnabled: true,
			
			theme: "light1", //"light1", "dark1", "dark2"
			title:{
				text: "Revenue Per Month"
			},
			data: [{
				type: "column", //change type to bar, line, area, pie, etc
				//indexLabel: "{y}", //Shows y value on all Data Points
				indexLabelFontColor: "#5A5757",
				indexLabelPlacement: "outside",
				dataPoints: [
					{ label: "January",x: 1, y: 500000 },
					{ label: "Feburary",x: 2, y: 550000 },
					{ label: "March",x: 3, y: 400000 },
					{ label: "April",x: 4, y: 800000 },
					{ label: "May",x: 5, y: 700000 },
					{ label: "June",x: 6, y: 680000 },
					{ label: "July",x: 7, y: 380000 },
					{ label: "August",x: 8, y: 640000},
					{ label: "September",x: 9, y: 300000 },
					{ label: "October",x: 10, y: 400000 },
					{ label: "November",x: 11, y: 450000 },
					{ label: "December",x: 12, y: 600000 },
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


export default BarChart
