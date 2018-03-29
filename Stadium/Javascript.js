

window.initMap = function(){
    var coordinates = { lat: 32.6022, lng: -85.4891 };

    var map = new google.maps.Map(document.getElementById("map"), {
        center: coordinates,
        zoom: 16,
        mapTypeId: 'satellite'
    });
    var marker = new google.maps.Marker({
        map: map,
        position: {
            lat: parseFloat(coordinates.lat),
            lng: parseFloat(coordinates.lng)
        },
        title: 'Jordan-Hare Stadium Heisman Dr, Auburn, AL 36849'
    });
};

window.onload = initMap;
