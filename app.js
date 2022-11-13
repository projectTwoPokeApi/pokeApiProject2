// PSEUDO CODE - projectTwoPokeAPI v2
// --------------------------------
//MINIMUM VIABLE PRODUCT CONCEPT
// --------------------------------
//Have a drop down menu of 5 pre-determined pokemon availible on page load.

// Instruct user to select one of the 5 pokemon from the drop down menu. and then to press the submit button.

// Submit button stores the ID hard-coded to the drop down menu's options, and uses it to locate the pokemons data array VIA API call.

// Retrieve desired data from array and store in variables.

//display retrieved data on page (Name, image, type, Numerical stats).

//allow multiple searches with a function that clears and preps the page.

// --------------
// STRETCH GOALS
// --------------

// When user loads page, call API to retrieve array containing all pokemon.

//Display loading bar to show wether API is loaded and ready or not.

//Instruct user to input the name of a pokemon into a search bar.

//store input of search bar as string. (Attempt to apply the function that forces the string to be all lowercase? Else specify in user instructions to only use lowercase.)

//implement error handling for incorrect searches (misspells, capitalization, rapid searches etc)

//use stored string to locate the specified pokemon in the large array.

//take the new url located inside the specified pokemons object.

//store said url inside a let variable.

//use let variable to run another API call, this time to the specific Pokemon's array containing all of its related data - name, type, pictures, moves, description etc.

//locate and store the desired data within variables.

//display stored data on page in an itemized and organized fashion.

//create fucntion that will allow user to input multiple pokemon names, via clearing the page on new search.

// ------------------------
// STRETCHIER GOALS
// ------------------------
//Implement another, identical search and display on the opposite side of the page, allowing the user to compare and constrast two pokemon.

//Have a "fight" button, that will pull the various combat stats from each pokemon, compare them, then declare a winner of the two. (vague and nebulous, potentially really hard to do, hence the less verbose pseudo code.)


// MVP

// Start with HTML skeleton
// start with namespace
// set up API Call
    // Attach id numbers to each Pokemon 
    // use a tepmlate literal to add at the end of the URL (thus calling a specific pokemon)
    // When the user selects something from the drop down, and then presses "Search", it calls the API
// Display results to the page
    // use dot notation ot reference whatever we want to be displaye do on the page, and then use innerHTML or append or whatever its call it

// Create out namespace object 
const pokeApp = {};

// declare the url global variable
let url;



// Make the call to the API
// pokeApp.getPokemon = function() {


// };

const button = document.getElementById('search');



// this is the function that will get the user's input
pokeApp.getUserInput = () => {

document.querySelector("#pokemon").addEventListener("change", function() {
           
    const userChoice = this.value;

    // artApp.getArt(selection);

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
    //  console.log(jsonResults.name)
    })  
}); 



pokeApp.displayData = (specificPokemon) =>{
  

    const title = document.querySelector(`h2`);
    title.innerText = specificPokemon.name;



    const sprite = document.querySelector(`img`);
    sprite.src = specificPokemon.sprites.front_default;

    const number = document.querySelector(`h3`);
    number.innerText = specificPokemon.id;





    




    

}

// Call the init
// pokeApp.init();

pokeApp.getUserInput();

// pokeApp.getPokemon();

