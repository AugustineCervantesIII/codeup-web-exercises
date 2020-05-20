"use strict";


let weatherUrl = 'https://api.openweathermap.org/data/2.5/onecall'
let weatherOptions = {
    lat: 29.4241,
    lon: -98.4936,
    appId: OPEN_WEATHER_APPID,
    exclude: 'minutely, current, hourly',
    units: 'imperial',
};

// function to get weather
function getWeather(url, options) {
    $.get(url, options).done(function (data) {
        // console.log(data)

        // $('.weather-row').html("");
        let weather = "";
        for (let i = 0; i <= 4; i++) {
            let todayDate = new Date(data.daily[i].dt * 1000).toLocaleDateString();
             weather +=
                '<div class="col-lg-3">' +
                '<div class="card" style="width: 18rem;">' +
                '<h5>' + todayDate + '</h5>' +
                '<p>' + 'Temperature: ' + data.daily[i].temp.day + '</p>' +
                '<p>' + 'Description: ' + data.daily[i].weather[0].description + '</p>' +
                '<p>' + 'Humidity: ' + data.daily[i].humidity + '</p>' +
                '<p>' + 'Wind: ' + data.daily[i].wind_speed + '</p>' +
                '<p>' + 'Pressure: ' + data.daily[i].pressure + '</p>' +
                '</div>' +
                '</div>'
        }
        $('.weather-row').html(weather);
    });
    console.log (options);
}

// calling the getWeather function();
getWeather(weatherUrl, weatherOptions);

// sets point for mapbox San Antonio when you first access page
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
    marker:false,
    draggable:true
});
// Add the geocoder to the map
map.addControl(geocoder);

let marker = new mapboxgl.Marker({
    draggable:true
})
    .setLngLat([-98.4936, 29.4241]) // Marker [lng, lat] coordinates
    .addTo(map); // Add the marker to the map




// after you click a from search results it will take the result long and latitude
// and will plug into the getWeather method which will display the new weather results for
// that result location and add a draggable marker


geocoder.on('result', function (event){
    // what date am I receiving back ?
console.log(event);
    weatherOptions.lon = event.result.center[1];
    weatherOptions.lat = event.result.center[0];
    console.log(weatherOptions);
    getWeather(weatherUrl, weatherOptions);
    marker.setLngLat([event.result.center[0], event.result.center[1]]) // Marker [lng, lat] coordinates
    .addTo(map);


marker.on('dragend', function () {
    let lngLat = marker.getLngLat();
    console.log("this is the long and lat of Marker" +lngLat);
    weatherOptions.lon = lngLat.lng;
    weatherOptions.lat = lngLat.lat;

    getWeather(weatherUrl, weatherOptions);
});

});
