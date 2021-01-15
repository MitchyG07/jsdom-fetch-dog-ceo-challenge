
//APIS
const imgUrl = "https://dog.ceo/api/breeds/image/random/4" 
const breedUrl = 'https://dog.ceo/api/breeds/list/all' 
let allDogs = []

//FETCHES
function addImages() {
    fetch(imgUrl)
        .then(response => response.json())
        .then(dog => domImages(dog.message))
}

function addBreeds() {
    fetch(breedUrl)
        .then(response => response.json())
        .then(breeds => {
            let allDogs = Object.keys(breeds.message)
            allDogs.forEach(dog => dogBreeds(dog))
        })
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
        img.style.width = '200px'
        dogImages.appendChild(img)
    } 
}

function dogBreeds(breed) {
        let li = document.createElement('li')
        li.textContent = breed
        li.id = breed
        ul.appendChild(li)
        allDogs.push(breed)
        document.querySelector(`#${breed}`).addEventListener('click', changeBreedColor)
}

//handles change the breed color
function changeBreedColor(e) {
    let breed = e.target
    breed.style.color = "cyan"
}

function handleChange(e) {
    let filteredDogs = allDogs.filter(breed => breed.startsWith(e.target.value))
    ul.innerHTML = ''
    filteredDogs.forEach(breed => dogBreeds(breed)) 
}

//listeners 
function addEventListeners(){
    let select = document.querySelector('select')
    select.addEventListener('change', handleChange)
}
addBreeds()
addImages()
addEventListeners()

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

