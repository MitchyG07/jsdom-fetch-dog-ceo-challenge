
//APIS
const imgUrl = "https://dog.ceo/api/breeds/image/random/4" 
const breedUrl = 'https://dog.ceo/api/breeds/list/all' 

//FETCHES
function addImages() {
    fetch(imgUrl)
        .then(response => response.json())
        .then(dog => domImages(dog.message))
}

function addBreeds() {
    fetch(breedUrl)
        .then(response => response.json())
        .then(breed => dogBreeds(breed.message))
} 
//function to add images to the page 

//GLOBAL PARENTS 
let dogImages = document.querySelector('#dog-image-container')
let ul = document.querySelector('#dog-breeds')


//TO THE DOM 
function domImages(images){
    for (const element of images) { 
        let img = document.createElement('img')
        img.src = element
        dogImages.appendChild(img)
    } 
}

function dogBreeds(breeds) {
    for (const key in breeds) {
        let li = document.createElement('li')
        li.textContent = key
        li.id = key
        ul.appendChild(li)
        document.querySelector(`#${key}`).addEventListener('click', changeBreedColor)
    }
}

//handles change the breed color
function changeBreedColor(e) {
    let breed = e.target
    breed.style.color = "blue"
}


//listeners 
document.querySelector('#breed-dropdown').addEventListener("change", dogBreeds)
addBreeds()
addImages()

// Add your code here
// let formData = {
//     dogName: "Byron",
//     dogBreed: "Poodle"
// }

// let configurationObject = {
//     method: "POST",
//     headers: { 
//         "Content-Type": "application/json",
//         "Accept": "application/json"
//     },
//     body: JSON.stringify(formData)        
// }

// fetch("http://localhost:3000/dogs", configurationObject)
//     .then(function(response){
//         return response.json();
//     })
//     .then(function(object){
//         console.log(object);
//     })
//     .catch(function(error){
//         alert("Bad things! Ragnarők!")
//         console.log(error.message)
//     })

