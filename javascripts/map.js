console.log("map loaded!")
var map

function initializeMap(){
var defaultCenter = new google.maps.LatLng(41.893974, -87.627945);

var defaultOptions = {
  zoom: 14,
  center: defaultCenter,
  mapTypeId: google.maps.MapTypeId.ROADMAP
}

map = new google.maps.Map(document.getElementById('map'), defaultOptions);

var bikeLayer = new google.maps.BicyclingLayer();
  bikeLayer.setMap(map)

  if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = new google.maps.LatLng(position.coords.latitude,
                                       position.coords.longitude);

      var infowindow = new google.maps.InfoWindow({
        map: map,
        position: pos,
        content: 'Location found using HTML5.'
      });

      map.setCenter(pos);
    }, function() {
      handleNoGeolocation(true);
    });
  } else {
    // Browser doesn't support Geolocation
    handleNoGeolocation(false);
  }


  function handleNoGeolocation(errorFlag) {
    if (errorFlag) {
      var content = 'Please turn on Location Services.';
    } else {
      var content = 'Error: Your browser doesn\'t support geolocation.';
    }

    var options = {
      map: map,
      position: defaultCenter,
      content: content
    };

    var infowindow = new google.maps.InfoWindow(options);
    map.setCenter(options.position);
  }
}

  var geocoder = new google.maps.Geocoder();
  var addresscode;
  var image = 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png';

  function codeAddress() {
    var address = document.getElementById("address").value;
    geocoder.geocode( { 'address': address}, function(results, status) {
      console.log(results[0].geometry.location);
      addresscode=results[0].geometry.location
      if (status == google.maps.GeocoderStatus.OK) {
        map.setCenter(results[0].geometry.location);
        map.setZoom(16);
        var marker = new google.maps.Marker({
            map: map,
            position: results[0].geometry.location,
            icon: image
        });
      } else {
        alert("Geocode was not successful for the following reason: " + status);
      }
    });
  }


google.maps.event.addDomListener(window, 'load', initializeMap);
