// Function to render your items
const renderItems = (collection) => {
	// The `ul` where the items will be inserted
	const collectionList = document.getElementById('collection')

	// Loop through each item in the collection array
	collection.forEach(item => {

		const listItem = document.createElement('li') // Make the `li`


		// This can get annoying, so we can use “template literals” instead
		const itemDetails =
			`
				<p>Artist: ${item.Artist}</p>
				<p>Title: ${item.Title}</p>
				<p>Station: ${item.Station}</p>
				<p>Line: ${item.Line}</p>
				<p>Year: ${item.Year}</p>
			`
		listItem.insertAdjacentHTML('beforeend', itemDetails) // Which can we then insert

		collectionList.appendChild(listItem) // Then add the whole `li` into the `ul`
	})

}


// Fetch gets your JSON file…
fetch('assets/collection.json')
	.then(response => response.json())
	.then(collection => {
		// And passes the data to the function, above!
		renderItems(collection) // In reverse order
	})

