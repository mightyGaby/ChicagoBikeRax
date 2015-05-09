var locations = [];


$.ajax({
method: 'get',
url: 'https://data.cityofchicago.org/resource/uh4d-zh38?$$app_token=Prn58WX99dW48gNx4RtzbOjIy',
dataType: 'json'
})
.done(function(data){
  // data = data.slice(1,data.length/2);
  for(var i=0; i<data.length; i++){
    locations.push(data[i]);
  };
  console.log(data);
  var marker;

  for (var i = 0; i < locations.length; i++) {
    marker = new google.maps.Marker({
      position: new google.maps.LatLng(locations[i].latitude, locations[i].longitude),
      map: map
    });

    google.maps.event.addListener(marker, 'click', (function(marker, i) {
      return function() {
        infowindow.setContent(locations[i][0]);
        infowindow.open(map, marker);
      }
    })(marker, i));
  };
});
