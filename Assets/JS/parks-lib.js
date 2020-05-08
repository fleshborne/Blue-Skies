var acadia = { 
    lat: 44.35, 
    lng: -68.21,
    // code: 
}

var americanSamoa = {
    lat: -14.25,
    lng: -170.68
}

var arches = {
    lat: 38.68, 
    lng: -109.57
}

var badlands = {
    lat: 43.75, 
    lng: -102.5
}

var bigBend = {
    lat: 29.25, 
    lng: -103.25
}

var biscayne = {
    lat: 25.65, 
    lng: -80.08
}

var gunnison = {
    lat: 38.57, 
    lng: -107.72
}

var bryceCanyon = {
    lat: 37.57, 
    lng: -112.18
}

var canyonlands = {
    lat: 38.2, 
    lng: -109.93
}

var capitolReef = {
    lat: 38.2, 
    lng: -111.17
}

var carlsbadCaverns = {
  lat: 32.17, 
  lng: -104.44	
}

var channelIslands = {
  lat: 34.01,
  lng:  -119.42
}

var congaree = {
  lat: 33.78, 
  lng: -80.78 
}

var craterLake = {
  lat: 42.94, 
  lng: -122.1 
}

var cuyahogaValley = {
  lat: 41.24, 
  lng: -81.55
}

var deathValley = {
  lat: 36.24,
  lng: -116.82
}

var denali = {
  lat: 63.33,
  lng: -150.5
}

var dryTortugas = {
  lat: 24.63,
  lng: -82.87
}

var everglades = {
  lat: 25.32,
  lng: -80.93
}

var gatesOfArctic = {
  lat: 67.78,
  lng: -153.3 
}

var gatewayArch = {
  lat: 38.63, 
  lng: -90.19 
}

var glacier = {
  lat: 48.8,
  lng: -114
}

var glacierBay = {
  lat: 58.5,
  lng: -137 
}

var grandCanyon = {
  lat: 36.06,
  lng: -112.14 
}

var grandTeton = {
  lat: 43.73,
  lng: -110.8
}

var greatBasin = {
  lat: 38.98, 
  lng: -114.3  
}

var greatSandDunes = {
  lat: 37.73,
  lng: -105.51 
}

var greatSmokyMountains = {
  lat: 35.68,
  lng: -83.53 
}

var guadalupeMountains = {
  lat: 31.92,
  lng: -104.87 
}

var haleakala = {
  lat: 20.72,
  lng: -156.17 
}

var hawaiiVolcanoes  = {
  lat: 19.38,
  lng: -155.2 
}

var hotSprings = {
  lat: 34.51,
  lng: -93.05 
}

var indianaDunes = {
  lat: 41.6533,
  lng: -87.0524 
}

var isleRoyale = {
  lat: 48.1,
  lng: -88.55 
}

var joshuaTree = {
  lat: 33.79,
  lng: -115.9 
}

var katmai = {
  lat: 58.5,
  lng: -155 
}

var kenaiFjords = {
  lat: 59.92,
  lng: -149.65 
}

var kingsCanyon = {
  lat: 36.8,
  lng: -118.55 
}

var kobukValley = {
  lat: 67.55,
  lng: -159.28 
}

var lakeClark = {
  lat: 60.97,
  lng: -153.42
}

var lassenVolcanic = {
  lat: 40.49,
  lng: -121.51 
}

var mammothCave = {
  lat: 37.18,
  lng: -86.1  
}

var mesaVerde = {
  lat: 37.18,
  lng: -108.49 
}

var mountRainer = {
  lat: 46.85,
  lng: -121.75 
}

var northCascades = {
  lat: 48.7,
  lng: -121.2 
}

var olympic = {
  lat: 47.97,
  lng: -123.5 
}

var petrifiedForest = {
  lat: 35.07,
  lng: -109.78 
}

var pinnacles = {
  lat: 36.48,
  lng: -121.16 
}

var redwood = {
  lat: 41.3,
  lng: -124 
}

var rockyMountain = {
  lat: 40.4,
  lng: -105.58 
}

var saguaro = {
  lat: 32.25,
  lng: -110.5 
}

var sequoia = {
  lat: 36.43,
  lng: -118.68 
}

var shenandoah = {
  lat: 38.53,
  lng: -78.35 
}

var theodoreRoosevelt = {
  lat: 46.97,
  lng: -103.45 
}

var virginIslands = {
  lat: 8.33,
  lng: -64.73 
}

var voyageurs = {
  lat: 48.5,
  lng: -92.88 
}

var whiteSands = {
  lat: 32.78,
  lng: -106.17
}

var windCave = {
  lat: 43.57,
  lng: -103.48
}

var wrangellStElias = {
  lat: 61,
  lng: -142 
}

var yellowstone = {
  lat: 44.6,
  lng: -110.5 
}

var yosemite = {
  lat: 37.83, 
  lng: -119.5  
}

var zion = {
  lat: 37.3,
  lng: -113.05  
}

var allParks = [acadia, americanSamoa, arches, badlands, bigBend, biscayne, gunnison, bryceCanyon, canyonlands, capitolReef, carlsbadCaverns, channelIslands, congaree, craterLake, cuyahogaValley, deathValley, denali, dryTortugas, everglades, gatesOfArctic, gatewayArch, glacier, glacierBay, grandCanyon, grandTeton, greatBasin, greatSandDunes, greatSmokyMountains, guadalupeMountains, haleakala, hawaiiVolcanoes, hotSprings, indianaDunes, isleRoyale, joshuaTree, katmai, kenaiFjords, kingsCanyon, kobukValley, lakeClark, lassenVolcanic, mammothCave, mesaVerde, mountRainer, northCascades, olympic, petrifiedForest, pinnacles, redwood, rockyMountain, saguaro, sequoia, shenandoah, theodoreRoosevelt, virginIslands, voyageurs, whiteSands, windCave, wrangellStElias, yellowstone, yosemite, zion];

function initMap() {
    var usa = { lat: 40.045835, lng: -96.428127 };
    var map = new google.maps.Map(document.getElementById("map"), {
      center: usa,
      zoom: 4,
    });
    allParks.forEach(function (park) {
        var marker = new google.maps.Marker({
          position: { lat: park.lat, lng: park.lng },
          map: map,
        //   code: location.code,
        });
        marker.addListener("click", function (e) {
        //   console.log(marker.code);
        });
      });
}



