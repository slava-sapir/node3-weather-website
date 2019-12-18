//  function showPosition() {
//     var latlon = 42.991223700000006 + "," + -81.2773012
  
//   var img_url = "https://maps.googleapis.com/maps/api/staticmap?center=" + latlon + "&zoom=14&size=400x300&sensor=false&key=AIzaSyCdM8k68a3j8Vy7-URgexkRbHZZ--FQKlg";
//    document.getElementById("mapholder").innerHTML = "<img src='"+img_url+"'>"
//    }

//style="width:100%;height:200px;"
//   Initialize and add the map
// function initMap() {
//        var uluru = {lat: -81.2773012, lng: 42.991223700000006};
   
//     var map = new google.maps.Map(
//         document.getElementById('mapholder'), {zoom: 4, center: uluru});
    
//     var marker = new google.maps.Marker({position: uluru, map: map});
//   }
// function initMap() {
//     var map = new google.maps.Map(document.getElementById('mapholder'), {
//       center: {lat: -81.2773012, lng: 42.991223700000006},
//       zoom: 8
//     });
//   }

function myMap() {
    var mapProp= {
      center:new google.maps.LatLng(42.991223700000006,-81.2773012),
      zoom:5
    };
    var map = new google.maps.Map(document.getElementById("mapholder"),mapProp);
    }


/* <script>
      async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCdM8k68a3j8Vy7-URgexkRbHZZ--FQKlg&callback=initMap">
</script> */