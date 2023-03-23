let images = [
    {title: "Can't Stop the Dance", url:"./assets/a.jpg"},
    {title: "We Love to Piss", url: "./assets/b.jpg"},
    {title: "No Horses", url: "./assets/c.jpg" }, 
    {title: "Bunghole Liquors", url: "./assets/d.jpg" }, 
    {title: "Questions & Answers", url: "./assets/6.jpg" }, 
    {title: "Free Hand Design", url: "./assets/7.jpg" }, 
    {title: "Ok, No", url: "./assets/8.jpg" }, 
    {title: "Go Vegan", url: "./assets/9.jpg" },
    {title: "Art is Life Ink", url: "./assets/10.jpg" }
]




function generateGalleryItems(images){

const img = document.createElement('img') // creates an image element
img.classList.add('gallery-img') // add a class of gallery-img to the image so we can access it in the css
img.src = images.url //specifies the source of the image to be the url in our images object

const paragraph = document.createElement ('p')
paragraph.innerHTML = images.title

const galleryItem = document.createElement("div") // creates a new div called gallery item
galleryItem.appendChild(img); // adds the image into the div

galleryItem.appendChild(paragraph);

document.querySelector('.gallery').appendChild(galleryItem) // adds the div to the gallery section we added earlier in the html


}

images.forEach(generateGalleryItems)



