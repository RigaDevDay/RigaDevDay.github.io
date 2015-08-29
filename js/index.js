// Closes the sidebar menu
$("#menu-close").click(function(e) {
    e.preventDefault();
    $("#sidebar-wrapper").toggleClass("active");
});

// Opens the sidebar menu
$("#menu-toggle").click(function(e) {
    e.preventDefault();
    $("#sidebar-wrapper").toggleClass("active");
});

// Scrolls to the selected menu item on the page
$(function() {
    $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {

            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
});

/*
 * Map (google) initialization
 */
(function () {
    function initialize() {
        var centerCoordinates = new google.maps.LatLng(56.946333, 24.116870);
        var mapOptions = {
            zoom: 13,
            center: centerCoordinates,
            zoomControlOptions: {
                position: google.maps.ControlPosition.LEFT_CENTER
            },
            mapTypeControl: false,
            streetViewControl: false,
            panControl: false,
            scrollwheel: false,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map(document.getElementById('map-container'), mapOptions);

        var styles = [{"stylers": [{"hue": "#00aaff"}, {"saturation": -23}, {"gamma": 1.37}, {"lightness": -5}]}];
        map.setOptions({styles: styles});

        var venueMarker = new MarkerWithLabel({
            position: centerCoordinates,
            map: map,
            title: 'Riga Dev Day 2016',
            icon: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png',
            labelContent: 'Kino Citadele',
            labelAnchor: new google.maps.Point(46, -5),
            labelClass: 'map-label'
        });

        var contentString = '<div id="content">' +
            '<div id="siteNotice">' +
            '</div>' +
            '<div id="bodyContent">' +
            '<a href="http://www.islandehotel.lv/"><img src="img/favicon.png"></a>' +
            '</div>' +
            '</div>';

        var infowindow = new google.maps.InfoWindow({
            content: contentString
        });

        //var hotelCoordinates = new google.maps.LatLng(56.951178, 24.08415, 17);
        //
        //var hotelMarker = new MarkerWithLabel({
        //    position: hotelCoordinates,
        //    map: map,
        //    title: 'Islande Hotel',
        //    icon: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png',
        //    labelContent: 'Islande Hotel',
        //    labelAnchor: new google.maps.Point(48, -5),
        //    labelClass: 'map-label'
        //});

        //google.maps.event.addListener(hotelMarker, 'click', function () {
        //    infowindow.open(map, hotelMarker);
        //});
        //
        //var pachoLatlng = new google.maps.LatLng(56.9462052, 24.1098639);
        //var pachoMarker = new MarkerWithLabel({
        //    position: pachoLatlng,
        //    map: map,
        //    title: 'Pacho music cafe',
        //    icon: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png',
        //    labelContent: 'Pacho music cafe',
        //    labelAnchor: new google.maps.Point(58, -5),
        //    labelClass: 'map-label'
        //});
        //var pachoInfowindow = new google.maps.InfoWindow({
        //    content: '<div id="content">' +
        //    '<div id="siteNotice">' +
        //    '</div>' +
        //    '<div id="bodyContent">' +
        //    '<a href="http://www.pacho.lv" target="_blank">http://www.pacho.lv</a>' +
        //    '</div>' +
        //    '</div>'
        //});
        //google.maps.event.addListener(pachoMarker, 'click', function () {
        //    pachoInfowindow.open(map, pachoMarker);
        //});


    }

    var image = new Image();
    image.src = 'img/favicon.png';

    google.maps.event.addDomListener(image, 'load', initialize);
}());
