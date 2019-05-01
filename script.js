var marker;

function initMap(){
  var myLatLng = {lat:	41.892654, lng: -87.610168};
  var map = new google.maps.Map(document.getElementById('map'), {
      center: myLatLng,
      zoom: 13
    });
 
  marker = new google.maps.Marker({
      position: myLatLng,
      map: map,
      title: 'Navy Pier',
      draggable: true,
      animation: google.maps.Animation.DROP
    });
  
  marker.addListener('click', toggleBounce);
  
  var rectangle = new google.maps.Rectangle({
          strokeColor: '#FF0000',
          strokeOpacity: 0.8,
          strokeWeight: 2,
          fillColor: '#FF0000',
          fillOpacity: 0.35,
          map: map,
          bounds: {
            north: 41.899654,
            south: 41.885654,
            east: -87.603168,
            west: -87.617168
          }
    });
}

function toggleBounce() {
        if (marker.getAnimation() !== null) {
          marker.setAnimation(null);
        } else {
          marker.setAnimation(google.maps.Animation.BOUNCE);
        }
 }