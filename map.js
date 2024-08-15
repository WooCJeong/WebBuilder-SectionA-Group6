function initMap() {
    let location = { lat: 51.064, lng: -114.088 }; 
    let map = new google.maps.Map(document.getElementById('google-map'), {
        zoom: 15,
        center: location
    });
    let marker = new google.maps.Marker({
        position: location,
        map: map
    });
}