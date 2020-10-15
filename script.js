// console.log("Hello World");

var fiveDayURL =
  "https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&appid=5013ea23d7c0a9940f6e40866a7d4524&units=imperial";

// DOM VARIABLES
var inputEl = $("#inputCity");
var submitSearchEl = $("#btn");
var userSearch = $("displayCity");
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

/// WHEN I search for a city
for (var i = 0; i < citiesDisplay.length; i++) {}
function weatherSearch(city) {
  var queryURL =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    city +
    "&appid=5013ea23d7c0a9940f6e40866a7d4524&units=imperial";

  // Moved inside the function to pull a city
  $.ajax({
    url: queryURL,
    method: "GET",
  }).then(function (response) {
    console.log(response);
    console.log(response.main.temp);
    //***** */ I am presented with current and future conditions for that city and that city is added to the search history
    pTag = $("<p>").text(city + response);
    $("#outPut").append(pTag);
  });
}
submitSearchEl.on("click", function (event) {
  event.preventDefault();
  console.log("this is working!");
  // call weather search function
  var searchCity = inputEl.val();
  // calling weathersearch and parsing a variable
  weatherSearch(searchCity);
});
// saving users input to a variable

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
// submitSearchEl.addEventListener("click", userSearch);
