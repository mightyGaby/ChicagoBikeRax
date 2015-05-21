var locations = [];
$( document ).ready(function() {
$.ajax({
    method: 'get',
    url: 'https://data.cityofchicago.org/resource/uh4d-zh38?$$app_token=Prn58WX99dW48gNx4RtzbOjIy',
    dataType: 'json',
    })
    .done(function(data){
      // data = data.slice(1,data.length/2);
      for(var i=0; i<data.length; i++){
        locations.push(data[i]);
      };
      console.log(data);
      var marker;


      var image = {
        url: 'bikeicon.png',
        size: new google.maps.Size(100, 100),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(17, 34),
        scaledSize: new google.maps.Size(45, 45)
      };

      for (var i = 0; i < locations.length; i++) {
        marker = new google.maps.Marker({
          position: new google.maps.LatLng(locations[i].latitude, locations[i].longitude),
          map: map,
          icon: image,
        });

          google.maps.event.addListener(marker, 'click', (function(marker, i) {
            var contentString = '<div class="infowindow">' + locations[i].address + '</div>';
              //marker.something = contentString to set value
              return function(infowindow) {
                //var infowindow = ?
                //infowindow.setContent(contentString);
                //infowindow.open(mapName, marker);
              }
      })(marker, i));

    };
  });


});
