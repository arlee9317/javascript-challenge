// from data.js
var tableData = data;

// YOUR CODE HERE!

//trigger for button on html page
var button = d3.select("#filter-btn");

// button trigger
button.on("click", createTable);


// create filter function
function dateFilter(date) {
	//newTable = [];
	//selecting date to be inputted 
	var selectedDate = document.getElementById("datetime").value;
	return date.datetime.includes(selectedDate); 
}

function createTable(){
	//returning selected data 
	var  newTable = tableData.filter(dateFilter);


	//find table body in the html
	var tbody = d3.select("tbody");
	tbody.html("");


	//loop through the filtered data
	newTable.forEach(ufoSightings =>{
		var row = tbody.append("tr")
		Object.entries(ufoSightings).forEach(([key,value]) =>{
			row.append("td").text(value)
	})
})

}

createTable();


// checking to see if we're getting the correct table data
//console.log(newTable);




