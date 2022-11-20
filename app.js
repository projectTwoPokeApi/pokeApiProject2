
// MVP Pseudocode

// Start with HTML skeleton
// start with namespace
// set up API Call
    // Attach id numbers to each Pokemon 
    // use a tepmlate literal to add at the end of the URL (thus calling a specific pokemon)
    // When the user selects something from the drop down, and then presses "Search", it calls the API
// Display results to the page
    // use dot notation or reference whatever we want to be displayed to on the page, and then use innerHTML or append or whatever it's call it.

// Create out namespace object 
const pokeApp = {};
// declare the url global variable
let url;

const button = document.getElementById('search');
// this is the function that will get the user's input
pokeApp.getUserInput = () => {
document.querySelector("#pokemon").addEventListener("change", function() {       
    const userChoice = this.value;
    // what we need for our fetch request:
    // url endpoint (new URL) with userChoice being added at the end
    url = new URL(`https://pokeapi.co/api/v2/pokemon/${userChoice}`);     
    })
}
button.addEventListener('click', function () {
    fetch(url)
    .then(results => {
    // apply .json() method to our results object
    return results.json();
    })
    .then(jsonResults => {
        
    // call a function to display the data we find in the object
     pokeApp.displayData(jsonResults);
    })  
}); 

//Function that takes retrieved data and displays to page via innerText.
pokeApp.displayData = (specificPokemon) =>{
  

    //Dynamically displays Name, Type, Picture, etc.
    const title = document.querySelector(`#name`);
    title.innerText = specificPokemon.name;
    
    const sprite = document.querySelector(`img`);
    sprite.src = specificPokemon.sprites.other.dream_world.front_default;

    const number = document.querySelector(`#index`);
    number.innerText = specificPokemon.id;

    const base_experience = document.querySelector(`#basexp`);
    base_experience.innerText = specificPokemon.base_experience;

    const weight = document.querySelector(`#weight`);
    weight.innerText = specificPokemon.weight;

    const height = document.querySelector(`#height`);
    height.innerText = specificPokemon.height;

}

// Function that starts all scripting on button push.
pokeApp.getUserInput();