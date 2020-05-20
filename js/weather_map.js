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
    for(let i = 0; i <= 5; i++) {
        let todayDate = new Date(data.daily[i].dt * 1000).toLocaleDateString();
        let weather = '<h5>' + todayDate + '</h5>' +
            '<p>' + 'Temperature: ' + data.daily[i].temp.day + '</p>' +
            '<p>' + 'Description: ' + data.daily[i].weather[0].description + '</p>' +
            '<p>' + 'Humidity: ' + data.daily[i].humidity + '</p>' +
            '<p>' + 'Wind: ' + data.daily[i].wind_speed + '</p>' +
            '<p>' + 'Pressure: ' + data.daily[i].pressure + '</p>';
        $('.weather').append(weather);
    }
});


mapboxgl.accessToken = MAPBOX_KEY;
let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v9',
    zoom: 9.5,
    center: [-98.4936, 29.4241]
});

let geocoder = new MapboxGeocoder({ // Initialize the geocoder
    accessToken: mapboxgl.accessToken, // Set the access token
    mapboxgl: mapboxgl, // Set the mapbox-gl instance
    marker: false, // Do not use the default marker style
});

// Add the geocoder to the map
map.addControl(geocoder);

let marker = new mapboxgl.Marker() // initialize a new marker
    .setLngLat([-98.4936, 29.4241]) // Marker [lng, lat] coordinates
    .addTo(map); // Add the marker to the map



$('.mapbox-ctrl-geocoder--icon-search').click(function(event) {
    let searchInput = $('.mapbox-ctrl-geocoder--input').val();
    geocode(searchInput, MAPBOX_KEY).then(function (result) {
        console.log(result);
        map.setCenter(result);
        map.setZoom(20);
        marker.setLngLat(result).addTo(map);
        console.log(result);
    });
})
    // geocode(searchInput, MAPBOX_KEY);
// });

    // function geocode(search, token) {
    //     let baseUrl = 'https://api.mapbox.com';
    //     let endPoint = '/geocoding/v5/mapbox.places/';
    //     return fetch(baseUrl + endPoint + encodeURIComponent(search)
    //         + '.json' + "?" + 'access_token=' + token)
    //         .then(function (res) {
    //             return res.json();
    //             // to get all the data from the request, comment out the following three lines...
    //         }).then(function (data) {
    //             console.log(data.features)
    //            return data.features[0].center;
    //         });
    // }


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