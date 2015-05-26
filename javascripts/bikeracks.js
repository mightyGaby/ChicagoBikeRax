$.ajax({
    method: 'get',
    url: 'https://data.cityofchicago.org/resource/uh4d-zh38?$$app_token=Prn58WX99dW48gNx4RtzbOjIy',
    dataType: 'json',
    })
    .done(function(data){
      console.log(data);

      // var image = {
      //   url: 'bikeicon.png',
      //   size: new google.maps.Size(100, 100),
      //   origin: new google.maps.Point(0, 0),
      //   anchor: new google.maps.Point(17, 34),
      //   scaledSize: new google.maps.Size(45, 45)
      // };

      for (var i = 0; i < data.length; i++) {
        marker = new google.maps.Marker({
          position: new google.maps.LatLng(data[i].latitude, data[i].longitude),
          map: map,
          title: data[i].address
        });

        google.maps.event.addListener(marker, 'click', (function(marker, i) {
        var markerAddress = marker.title;
        return function() {
          console.log(markerAddress)
          $("#saved").append("<li>"+ markerAddress + "</li>");
        }
        })(marker, i));
      };
  });
