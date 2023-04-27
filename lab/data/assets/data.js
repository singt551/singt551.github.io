const color = [];
const red = [];
const orange = [];
const yellow = [];
const darkGreen = [];
const green = [];
const blue = [];
const darkBlue = [];
const purple = [];

const range1 = [];
const range2 = [];
const range3 = [];
const range4 = [];
const range5 = [];
const range6 = [];
const range7 = [];
const range8 = [];


var buttonStage = "LINE";
var dataColor =[]
var dataRange = []
// var data = [{
// 	values: [red.length, orange.length, yellow.length, darkGreen.length, green.length, blue.length, darkBlue.length, purple.length],
// 	labels: ['IRT East Side Line', 'IND 6th Avenue Line', 'BMT Broadway Line', 'IRT West Side Line', 'IND Crosstown Line', 'IND 8th Avenue Line', 'BMT Nassau Street-Jamaica Line', 'IRT Flushing Line'],
// 	type: 'pie'
// }];
var layout = {
	height: 600,
	width: 700
};
//fill all of these ranges

const filterItemsbyLine = (collection) => {
	collection.forEach(item => {
		// console.log(item.Year)

		// if its red
		if (item.Line == "IRT East Side Line") {
			item.color = "red";
			red.push(item);
		}
		if (item.Line == "IND 6th Avenue Line") {
			item.color = "orange";
			orange.push(item);
		}
		if (item.Line == "BMT Broadway Line") {
			item.color = "yellow";
			yellow.push(item);
		}
		if (item.Line == "IRT West Side Line") {
			item.color = "darkGreen";
			darkGreen.push(item);
		}
		if (item.Line == "IND Crosstown Line") {
			item.color = "green";
			green.push(item);
		}
		if (item.Line == "IND 8th Avenue Line") {
			item.color = "blue";
			blue.push(item);
		}
		if (item.Line == "BMT Nassau Street-Jamaica Line") {
			item.color = "darkBlue";
			darkBlue.push(item);
		}
		if (item.Line == "IRT Flushing Line") {
			item.color = "purple";
			purple.push(item);
		}
		var dataColor = [{
			values: [red.length, orange.length, yellow.length, darkGreen.length, green.length, blue.length, darkBlue.length, purple.length],
			labels: ['IRT East Side Line', 'IND 6th Avenue Line', 'BMT Broadway Line', 'IRT West Side Line' , 'IND Crosstown Line' , 'IND 8th Avenue Line' , 'BMT Nassau Street-Jamaica Line' , 'IRT Flushing Line'],
			type: 'pie'
		  }];
		  Plotly.newPlot('myDiv', dataColor, layout);

		// console.log(red)
		// var dataColor = [{
		// 	values: [red.length, orange.length, yellow.length, darkGreen.length, green.length, blue.length, darkBlue.length, purple.length],
		// 	labels: ['IRT East Side Line', 'IND 6th Avenue Line', 'BMT Broadway Line', 'IRT West Side Line', 'IND Crosstown Line', 'IND 8th Avenue Line', 'BMT Nassau Street-Jamaica Line', 'IRT Flushing Line'],
		// 	type: 'pie'
		// }];
		

	}
	)
}

const filterbyYear = (collection) => {
	collection.forEach(item => {
		// console.log(item.Year)
		if (item.Year = 1980) {
			item.range = "range1";
			range1.push(item);
			
		}
		if (item.Year <= 1990 && item.Year > 1986) {
			item.range = "range2";
			range2.push(item);
		}
		if (item.Year <= 1995 && item.Year > 1991) {
			item.range = "range3";
			range3.push(item);
		}
		if (item.Year <= 2000 && item.Year > 1996) {
			item.range = "range4";
			range4.push(item);
		}
		if (item.Year <= 2005 && item.Year > 2001) {
			item.range = "range5";
			range5.push(item);
		}
		if (item.Year <= 2010 && item.Year > 2006) {
			item.range = "range5";
			range6.push(item);
		}
		if (item.Year <= 2015 && item.Year > 2011) {
			item.range = "range7";
			range7.push(item);
		}
		if (item.Year <= 2020 && item.Year > 2016) {
			item.range = "range8";
			range8.push(item);
		}
		

	})
	// var dataRange = [{
	// 	values: [range1.length, range2.length, range3.length, range4.length, range5.length, range6.length, range7.length, range8.length],
	// 	labels: ['1980-1985', '1986-1990', '1991-1995', '1996-2000', '2001-2005', '2006-2010', '2011-2015', '2016-2020'],
	// 	type: 'pie'
	// }];
	// console.log(item)
	
}

const button = document.getElementById("toggle-button");
// let "red" = red.length
const plotlyDiv = document.getElementById('myDiv')

// Fetch gets your JSON file…
fetch('assets/collection.json')
	.then(response => response.json())
	.then(collection => {
		filterItemsbyLine(collection);

		// button.addEventListener("click", toggleButton());		//if the button tells line on
		// if (buttonStage === "LINE") {
		// 	filterItemsbyLine(collection);
			
			
		// } else if(buttonStage === "YEAR") {
		// 	//otherwise, do this
		// 	filterbyYear(collection)

		// }

	})


function toggleButton() {
	// var button = document.getElementById("toggle-button");
	// toggle 1: 
	if (button.value == "ON") {
		// filterItemsbyLine = (collection)
		plotlyDiv.innerHTML =''
			var dataColor = [{
				values: [red.length, orange.length, yellow.length, darkGreen.length, green.length, blue.length, darkBlue.length, purple.length],
				labels: ['IRT East Side Line', 'IND 6th Avenue Line', 'BMT Broadway Line', 'IRT West Side Line' , 'IND Crosstown Line' , 'IND 8th Avenue Line' , 'BMT Nassau Street-Jamaica Line' , 'IRT Flushing Line'],
				type: 'pie'
			  }];
		button.value = "OFF";
		button.innerHTML = "Line";
		buttonStage = "LINE";
		// console.log(buttonStage)
		Plotly.newPlot('myDiv', dataColor, layout);
	}
	// toggle 2: 

	else {
		// filterItemsbyYear = (collection)
		plotlyDiv.innerHTML =''

			var dataRange = [{
				values: [range1.length, range2.length, range3.length, range4.length, range5.length, range6.length, range7.length, range8.length ],
				labels: ['1980-1985', '1986-1990', '1991-1995', '1996-2000' , '2001-2005' , '2006-2010' , '2011-2015' , '2016-2020'],
				type: 'pie'
			  }];
		button.value = "ON";
		button.innerHTML = "Year";
		buttonStage = "YEAR";
		// console.log(buttonStage);
		Plotly.newPlot('myDiv', dataRange, layout);
	}

	// filterItemsbyLine(collection)
	// // console.log(red)
	// var data = [{
	// 	values: [red.length, orange.length, yellow.length, darkGreen.length, green.length, blue.length, darkBlue.length, purple.length],
	// 	labels: ['IRT East Side Line', 'IND 6th Avenue Line', 'BMT Broadway Line', 'IRT West Side Line' , 'IND Crosstown Line' , 'IND 8th Avenue Line' , 'BMT Nassau Street-Jamaica Line' , 'IRT Flushing Line'],
	// 	type: 'pie'
	//   }];

	//   var layout = {
	// 	height: 600,
	// 	width: 700
	//   };

	//   Plotly.newPlot('myDiv', data, layout);
	// Plotly.newPlot('myDiv', data, layout);
}


