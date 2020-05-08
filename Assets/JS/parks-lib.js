var acadia = { 
    lat: 44.35, 
    lng: -68.21 
};

var samoa = {
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

var allParks = [acadia, samoa, arches, badlands];

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
// var  = {
//     lat:
//     lng:
// }
// var  = {
//     lat:
//     lng:
// }
// var  = {
//     lat:
//     lng:
// }
// var  = {
//     lat:
//     lng:
// }
// var  = {
//     lat:
//     lng:
// }
// var  = {
//     lat:
//     lng:
// }


