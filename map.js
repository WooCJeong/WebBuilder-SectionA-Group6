function initMap() {
    var location = { lat: 51.064, lng: -114.088 }; 
    var map = new google.maps.Map(document.getElementById('google-map'), {
        zoom: 15,
        center: location
    });
    var marker = new google.maps.Marker({
        position: location,
        map: map
    });
}