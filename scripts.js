/**
 * @author Chidinma Irene Nwoye
 */


//Steps
//1. Load the jQuery library
//2. Set up a javascript file
//3. console.log to test the javascript file
//4. Add the document.ready call
//5. Include a function activated on document ready
//6. Console.log the function to test it's working
//7. Load the Google Viz library
//8. load the data and include that data to the library 
//9. Take the data to viz library
//10. Put the data in a format that the library can access
//11. Create an array of arrays from the JSON data, specifically the date to value
//12. Tell the library what type of chart I need and also tell library where to put the chart

console.log("My Javascript is working"); //I'm testing my javascript file

function dataUp(uEMPDATA){            //uEMPDATA is the local name for the JSON file
	
	console.log(uEMPDATA);        //I'm outputting the JSON file to be sure the function dataUp works on my javascript
	
	var obsData = uEMPDATA.observations; //I'm constructing an array of arrays
	var arrayArray = [];                 //my arrayArray is the array  of arrays
	
	
	var arrayHeader = ["Date","Value"];  //I want the headers to be the 1st element of my array i.e. to be on the first row
	arrayArray.push(arrayHeader);       //I'm inserting the headers at the top of my page
	
	
	//specify starting point, ending point
	for(i=0; i<obsData.length; i++){       //1st parameter is starting point
		
		//create reference to current object in list
		var ObjCur = obsData[i];
		var ArrayCur= [ObjCur.date, Number(ObjCur.value)];   //Number converts the curObj from strings to numbers
		arrayArray.push(ArrayCur);                          //pushing the little arrays into the big array, arrayArray
		
	}// end of for loop
	
	console.log(arrayArray); //I'm outputting my array of arrays
	
	
	var DataTable = google.visualization.arrayToDataTable(arrayArray); //I'm putting data into my visualization library
	
	
	var ChartChoices = {                           //create options object to customize the look of my chart
          title: "Unemployment Since 1980"       //This is a configuration option
        };
	//tells Google Visualization to create a line chart
	var ThisChart = new google.visualization.LineChart(document.getElementById('newChartDiv')); //I've created type of chart e.g. BarChart to LineChart etc
	ThisChart.draw(DataTable,ChartChoices);
}


function GoogleUp() {

	console.log("I've put up Google!");
	
		
	$.get("UEMP270V_data.json", dataUp, "json"); //I'm retrieving my the json 

}


function docUp() {

	console.log("My page is up!"); //This is to test that my page was uploaded

	//I'm loading the google visualization library
	google.load("visualization", "1", {
		packages : ["corechart"],
		callback : "GoogleUp"
	});

}


$(document).ready(docUp);  //I've used $(document).ready to call my function, docUp


