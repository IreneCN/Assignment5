/**
 * @author Chidinma Irene Nwoye
 */

console.log("My Javascript is working"); //I'm testing my javascript file

function dataUp(uEMPDATA){            //uEMPDATA is the local name for the JSON file
	
	console.log(uEMPDATA);        //I'm outputting the JSON file to be sure the function dataUp works on my javascript
	
	var obsData = uEMPDATA.observations; //I'm constructing an array of arrays
	var arrayArray = [];                 //my arrayArray is the array  of arrays
	
	
	var arrayHeader = ["Date","Value"];  //I want the headers to be the 1st element of my array i.e. to be on the first row
	arrayArray.push(arrayHeader);       //I'm inserting the headers at the top of my page
	
	
	

$(document).ready(docUp);  //I've used $(document).ready to call my function, docUp


