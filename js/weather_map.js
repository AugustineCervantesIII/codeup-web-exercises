"use strict";


let weatherUrl = 'https://api.openweathermap.org/data/2.5/onecall'
let weatherOptions = {
    lat: 29.4241,
    lon: -98.4936,
    appId: OPEN_WEATHER_APPID,
    exclude: 'minutely, current, hourly',
    units: 'imperial',
};

$.get(weatherUrl, weatherOptions).done(function (data) {
    console.log(data)
    let todayDate = new Date(data.daily[0].dt * 1000).toLocaleDateString();

    $('.card-header').append(todayDate);
    $('.temp').append(' ' + data.daily[0].temp.day);
    $('.description').append(' ' + data.daily[0].weather[0].description);
    $('.humidity').append(' ' + data.daily[0].humidity);
    $('.wind').append(' ' + data.daily[0].wind_speed);
    $('.pressure').append(' ' + data.daily[0].pressure);
    //console.log(todayDate); // full date description
   // console.log(todayDate.toLocaleDateString()); // display the unix timestamp as a human readable date
    //[0] for today date
    //[1] for tomorrow
    console.log(data.daily[0].temp.day);
    console.log(data.daily[0].weather[0].description);
    console.log(data.daily[0].humidity)
    console.log(data.daily[0].wind_speed);
    console.log(data.daily[0].pressure);
});


mapboxgl.accessToken = MAPBOX_KEY;
let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v9',
    zoom: 9.5,
    center: [-98.4936, 29.4241]
});


//As you complete each step, commit your changes and push them to GitHub.

//Using HTML, CSS, jQuery, AJAX, and the OpenWeatherMap API, start by
// showing the current conditions for city you live in on your page.

//Update your layout and AJAX request(s) to display a five day forecast
// for the city you live in that looks like the screenshot below.

//If you want to add the icons the URLs for OpenWeatherMap's icons
// are formatted like: http://openweathermap.org/img/w/[icon].png
// where [icon] comes from the API response.

//Refer to your Mapbox API exercise. Recreate the map below your 5
// day forecast. Read through the documentation for the Mapbox API
// and figure out how to allow the user to drop a pin on any place
// on the map. Once the user drops a pin, grab its coordinates and
// feed those into your OpenWeatherMap API. Update the five-day forecast
// with the information from those coordinates (you should also get
// rid of your input boxes at this point).

//Add a Mapbox text input to search by location and have the forecast
// update when a new location is searched.

//As a bonus make sure you can update the marker's position to the
// new search result.