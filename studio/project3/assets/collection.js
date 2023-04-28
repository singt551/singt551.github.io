
const renderItems = (collection) => {
	const collectionList = document.getElementById('collection')
	const parentList = document.querySelectorAll('.parent');
	const infoCard = document.createElement('div');
	const mainSection = document.getElementById('main-section');
	infoCard.classList.add('info-card')
	infoCard.style.display = "none";

	mainSection.append(infoCard)
	console.log(collection.length)

	let i=0;
	function renderCard(evt) {
		let randomIndex = Math.floor(Math.random() * collection.length);
		let randomEntry = collection[randomIndex]
		infoCard.style.display = "block";

		infoCard.innerHTML = `
			<p>Artist: ${randomEntry.Artist}</p>
			<p>Title: ${randomEntry.Title}</p>
			<p>Station: ${randomEntry.Station}</p>
			<p>Line: ${randomEntry.Line}</p>
			<p>Year: ${randomEntry.Year}</p>
		`
		img = document.createElement("img")
		img.src = randomEntry.Image
		infoCard.append(img)

		if (evt.pageX < (document.body.clientWidth/2)) {
			infoCard.style.left = `${evt.pageX + 20}px`
		} else {
			infoCard.style.left = `${evt.pageX - infoCard.clientWidth -20}px`
		}
		infoCard.style.top = `${evt.pageY + 20}px`
	}
	
	// Loop through each item in the collection array
	// collection.forEach(item => {
	// 	if ( i === 14 ) {
	// 		return
	// 	}
	// 	const dot = document.createElement('div');
	// 	dot.classList.add("dot");
	// 	dot.classList.add("onClick")
	// 	parentList[i].append(dot);

	// 	if(parentList[i].innerHTML==='<div class="dot"></div><div class="dot"></div><div class="dot"></div><div class="dot"></div><div class="dot"></div>'){

	// 		if(parentList.length>i){
	// 			i++
	// 			console.log(i)
	// 		}	
	// 	}
	// 	dot.addEventListener('click', (event) => {
	// 		if (dot.classList.contains("onClick")) {
	// 			renderCard(event)
	// 			dot.classList.remove("onClick")
	// 		} else {
	// 			infoCard.style.display = "none";
	// 			dot.classList.add("onClick")
	// 		}
			
	// 	})
	// })

	// collection.forEach(item => {
		for (let index = 0; index < 14; index++) {
			for (let index2 = 0; index2 < 5; index2++) {
				const dot = document.createElement('div');
				dot.classList.add("dot");
				dot.classList.add("onClick")
				parentList[index].append(dot);
				dot.addEventListener('click', (event) => {
					if (dot.classList.contains("onClick")) {
						renderCard(event)
						dot.classList.remove("onClick")
					} else {
						infoCard.style.display = "none";
						dot.classList.add("onClick")
					}
					
				})
			}
			
		}
	}
	// )
// }


// Fetch gets your JSON file…
fetch('assets/collection.json')
	.then(response => response.json())
	.then(collection => {
		// And passes the data to the function, above!
		renderItems(collection) // In reverse order
	})

