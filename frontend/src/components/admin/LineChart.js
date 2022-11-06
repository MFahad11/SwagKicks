import React from 'react'
import CanvasJSReact from '../../canvasjs.react';
const LineChart = () => {

var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

		const options = {
			animationEnabled: true,
			
			theme: "light1", //"light1", "dark1", "dark2"
			title:{
				text: "Website Traffic"
			},
			data: [{
				type: "line", //change type to Line, line, area, pie, etc
				//indexLabel: "{y}", //Shows y value on all Data Points
				indexLabelFontColor: "#5A5757",
				indexLabelPlacement: "outside",
				dataPoints: [
					{ label: "January",x: 1, y: 6000 },
					{ label: "Feburary",x: 2, y: 5500},
					{ label: "March",x: 3, y: 5000,indexLabel: "lowest",markerColor: "red", markerType: "cross" },
					{ label: "April",x: 4, y: 6000 },
					{ label: "May",x: 5, y: 7500 },
					{ label: "June",x: 6, y: 8000 },
					{ label: "July",x: 7, y: 7200 },
					{ label: "August",x: 8, y: 6400},
					{ label: "September",x: 9, y: 7000 },
					{ label: "October",x: 10, y: 8000 },
					{ label: "November",x: 11, y: 9500,indexLabel: "highest",markerColor: "red", markerType: "triangle" },
					{ label: "December",x: 12, y: 9000 },
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


export default LineChart