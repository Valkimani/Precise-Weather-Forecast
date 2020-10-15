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
for (var i = 0; i < citiesDisplay.length; i++) {
  var searchHistory = $("<div>").addClass("list").text(citiesDisplay[i]);
}
function weatherSearch(city) {
  var queryURL =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    city +
    "&appid=5013ea23d7c0a9940f6e40866a7d4524&units=imperial";
  "pro.openweathermap.org/date/2.5/forecast/hourly?q" +
    city +
    // Moved inside the function to pull a city
    $.ajax({
      url: queryURL,
      method: "GET",
    }).then(function (response) {
      console.log(response);
      console.log(response.main.temp);
      //***** */ I am presented with current and future conditions for that city and that city is added to the search history
      var pTag = $("<p>").text(city);

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
// for (var i = 0; i < 5; i++) {
//   var fiveDayForeCast=
