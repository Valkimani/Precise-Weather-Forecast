// console.log("Hello World");
// DOM VARIABLES
var inputEl = document.getElementById("inputCity");
var submitSearchEl = document.querySelector(".btn btn-primary");

// JS VARIABLES
var citiesDisplay = [
  "Austin",
  "Chicago",
  "New York",
  "Orlando",
  "San Francisco",
  "Seattle",
  "Denver",
  "Atlanta",
];
// / WHEN I search for a city
// search for a city
var userSearch = document.querySelector("inputCity");

for (var i = 0; i < citiesDisplay.length; i++) {}
function weatherSearch(city) {}
// saving users input to a variable

if (userSearch === searchOuPut) {
  var searchCity = inputEl.val();
}

// Function definitions
// Adding a function that displays the search results
//  presented with current and future conditions for that city and that city is added to the search history/call search results

// searchResults();

// function searchOutput() {
//   console.log("display search output");
// }
// Function call
// call one function to kick things off

// // displayText.textContent=
// weatherSearch();

// WHEN I view current weather conditions for that city
// THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index

// WHEN I view the UV index
// THEN I am presented with a color that indicates whether the conditions are favorable, moderate, or severe

// WHEN I view future weather conditions for that city
// THEN I am presented with a 5 - day forecast that displays the date, an icon representation of weather conditions, the temperature, and the humidity

// WHEN I click on a city in the search history
// THEN I am again presented with current and future conditions for that city

// WHEN I open the weather dashboard
// THEN I am presented with the last searched city forecast

// Add an event listener
submitSearchEl.addEventListener("click", userSearch);
