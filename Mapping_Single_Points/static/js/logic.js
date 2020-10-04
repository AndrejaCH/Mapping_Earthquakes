// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level.
let map = L.map('mapid').setView([40.7, -94.5], 4);

// // Create the map object with a center and zoom level.
// //An alternative to using the setView()
// // This method is useful when we need to add multiple tile layers, 
// // or a background image of our map(s), which we will do later in this module.
// let map = L.map("mapid", {
//     center: [
//       40.7, -94.5
//     ],
//     zoom: 4
//   });


//  Add a marker to the map for Los Angeles, California.
//This is used when you want marker. Circle was used instead and this code was commented out.
//let marker = L.marker([34.0522, -118.2437]).addTo(map);

//Add circle to the map
//Skill-Drill 13.4.1
L.circle([34.0522, -118.2437], {
    radius: 300,
    color: 'black',
    fillColor: 'lightyellow',
    //fillOpacity: '0.8'

 }).addTo(map);

// //using circleMarker - this doesn't work???
// L.circleMarker([34.0522, -118.2437], {
//     radius: 300,
//     color: "black",
//     fillColor: "lightyellow"
// }).addTo(map);



// We create the tile layer that will be the background of our map.
// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/dark-v10',
    //tileSize: 512,
    //zoomOffset: -1,
    accessToken: API_KEY
});

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);