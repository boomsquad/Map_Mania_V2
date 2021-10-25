var gMap;

var places = [
    {"content":"Palos Hills, Illinois", "coordinates":{"lat":41.8781, "lng":-87.6298}, "iconImagePath": "https://maps.google.com/mapfiles/kml/shapes/info-i_maps.png"},
    {"content":"Ramallah, Palestine", "coordinates":{"lat":31.9038, "lng":35.2034}, "iconImagePath": "https://maps.google.com/mapfiles/kml/shapes/info-i_maps.png"},
    {"content":"Tokyo, Japan", "coordinates":{"lat":35.672, "lng":139.6503}, "iconImagePath": "https://maps.google.com/mapfiles/kml/shapes/info-i_maps.png"}
];

var currentPlaceIndex = places.length - 1;
var currentPlace = places[currentPlaceIndex];

var score = 0;

function initMap() {
    gMap = new google.maps.Map(document.getElementById("myMapID"), {
        center: {lat: 41.878, lng: 10}, zoom: 3, gestureHandling: "greedy"});

    google.maps.event.addListener(gMap, 'idle', function() {
        updateGame()
    });

    myHint("It is an island in Asia!");
    setScore(score)
}


function updateGame() {
    console.log('function UpdateGame()!');
    var zoomLevel = gMap.getZoom();
    var inBounds = false;

    if (gMap.getBounds().contains(currentPlace.coordinates)) {
        inBounds = true;
    }
    if (inBounds && zoomLevel >= 6) {
        console.log("You found it!")
        addMarker(currentPlace);
        nextLocation();
        setScore(score);
        myHint(hint);
    }

    console.log("inBounds: " + inBounds + " zoomLevel: " + zoomLevel);
}

function initApplication() {
    console.log('Map Mania Version 2 - Starting!');
}

function addMarker() {
    new google.maps.Marker({position: currentPlace.coordinates, map:gMap}); 
}

function nextLocation() {
    currentPlaceIndex--;
    currentPlace = places[currentPlaceIndex];
}

// Hint function that is not functional
function myHint(hint) {
    //hint = "something"
    document.getElementById("hint").value = hint;
}

// This increase the score by 10 everytime a marker is found
function setScore() {
    score += 10;
    document.getElementById("score").value = score;
}

// Cheat code button uses this to show all locations
function cheatCode() {
    new google.maps.Marker({position:{lat:41.8781,lng:-87.6298}, map:gMap});
    new google.maps.Marker({position:{lat:31.9038,lng:35.2034}, map:gMap});
    new google.maps.Marker({position:{lat:35.6762,lng:139.6503}, map:gMap});
}

// When all markers are found
function win() {
    
}