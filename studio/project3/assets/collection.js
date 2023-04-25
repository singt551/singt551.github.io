// Function to render your items
const renderItems = (collection) => {
	// The `ul` where the items will be inserted
	const collectionList = document.getElementById('collection')
	const parentList = document.querySelectorAll('.parent');
	// const colorArray = ["red", "orange", "green", "yellow", "darkGreen", "blue", "darkBlue", "purple"];
	// let vert = true; 


	let i=0;
	// let k = 0;
	// let colorIndex = 1;

	// for(let j=0; j<collection.length; j++){
	// 	//multiples of 6, making divs
	// 	if(j%6===0){
	// 		const line = document.createElement('div');
	// 		let leftValue = colorIndex*10;
	// 		line.style.left = leftValue+'vw'

	// 		//vertical vs horizontal
	// 		if(vert===true){
	// 			line.style.height = '50vh';
	// 			line.style.width = '70px';
	// 		}else{
	// 			line.style.height = '70px';
	// 			line.style.width = '100%';
	// 			line.style.top= '50vh';
	// 		}

	// 		line.classList.add(colorArray[colorIndex]);
			
	// 		if(colorIndex<colorArray.length){
	// 			colorIndex++;
	// 		}
	// 		console.log(line);
	// 	}
	// 	//switch between vertical and horizontal
	// 	vert=!vert;
		
	// }

	// Loop through each item in the collection array
	collection.forEach(item => {

		const dot = document.createElement('div');
		dot.classList.add("dot");
		parentList[i].append(dot);


		if(parentList[i].innerHTML==='<div class="dot"></div><div class="dot"></div><div class="dot"></div><div class="dot"></div><div class="dot"></div>'){
			if(parentList.length-1>i){
				i++
			}	
		}

	// 	const listItem = document.createElement('li') // Make the `li`


	// 	// This can get annoying, so we can use “template literals” instead
	// 	const itemDetails =
	// 		`
	// 			<p>Artist: ${item.Artist}</p>
	// 			<p>Title: ${item.Title}</p>
	// 			<p>Station: ${item.Station}</p>
	// 			<p>Line: ${item.Line}</p>
	// 			<p>Year: ${item.Year}</p>
	// 		`
	// 	listItem.insertAdjacentHTML('beforeend', itemDetails) // Which can we then insert

	// 	collectionList.appendChild(listItem) // Then add the whole `li` into the `ul`
	// })
	})
}


// Fetch gets your JSON file…
fetch('assets/collection.json')
	.then(response => response.json())
	.then(collection => {
		// And passes the data to the function, above!
		renderItems(collection) // In reverse order
	})

