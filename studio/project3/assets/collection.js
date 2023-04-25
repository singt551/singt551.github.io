// Function to render your items
const renderItems = (collection) => {
	// The `ul` where the items will be inserted
	const collectionList = document.getElementById('collection')
	const parentList = document.querySelectorAll('.parent');
	const infoCard = document.createElement('div');
	const mainSection = document.getElementById('main-section');
	infoCard.classList.add('info-card')

	mainSection.append(infoCard)
	// const colorArray = ["red", "orange", "green", "yellow", "darkGreen", "blue", "darkBlue", "purple"];
	// let vert = true; 
	console.log(collection.length)

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
	function renderCard(evt) {
		let randomIndex = Math.floor(Math.random() * collection.length);
		let randomEntry = collection[randomIndex]
		infoCard.style.top = `${evt.pageY + 20}px`
		infoCard.style.left = `${evt.pageX + 20}px`

		infoCard.innerHTML = `
			<p>Artist: ${randomEntry.Artist}</p>
			<p>Title: ${randomEntry.Title}</p>
			<p>Station: ${randomEntry.Station}</p>
			<p>Line: ${randomEntry.Line}</p>
			<p>Year: ${randomEntry.Year}</p>
		`
	}
	// Loop through each item in the collection array
	collection.forEach(item => {
		if ( i === 14 ) {
			return
		}
		const dot = document.createElement('div');
		dot.classList.add("dot");
		parentList[i].append(dot);

		if(parentList[i].innerHTML==='<div class="dot"></div><div class="dot"></div><div class="dot"></div><div class="dot"></div><div class="dot"></div>'){

			if(parentList.length>i){
				i++
				console.log(i)
			}	
		}
		dot.addEventListener('click', (event) => {
			renderCard(event)
		})
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

