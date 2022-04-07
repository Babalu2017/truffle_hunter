function initMap() {

    // Map Options
    var options = {
        zoom: 10,
        center: {lat:51.509865,lng:-0.118092},
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        mapTypeControl: true,
        fullscreenControl: false
    }


    // xxxxxx New Map
    //Remote Work
     var map = new google.maps.Map(document.getElementById('map'), options);

     

    
    /*
    // Add Markers
    var iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';
    var marker = new google.maps.Marker({
        position: {lat:51.52582,lng:-0.13385},
        map: map,
        // icon: iconBase + 'library_maps.png'
    });

    // Add Content to the marker
    var infoWindow = new google.maps.InfoWindow({
        content: `<h6>The Wellcome Collection</h6>`,
    });

    marker.addListener('click', function() {
        infoWindow.open(map, marker);
    });
    */

    // xxxxxxxxxxxxxxxxxx Remote Work
    //Array of markers
    var markers = [
        {
            coords: {lat:51.53070,lng:-0.07781},
            content: `<a href="#100rooftop">the rooftop</a>`
        },
        {
            coords: {lat:51.55059,lng:-0.14579},
            content: `<a href="#lock" >lock tavern</a>`
        },
        {
            coords: {lat:51.50389,lng:-0.01240},
            content: `<a href="#madison">the madison</a>`
        },
        {
            coords: {lat:51.50520,lng:-0.14078},
            content: `<a href="#flight">flight club victoria</a>`
        },
        {
            coords: {lat:51.52241,lng:-0.14116},
            content: `<a href="#aqua">aqua nueva</a>`
        },
        {
            coords: {lat:51.51872,lng:-0.14142},
            content: `<a href="#windmill">windmill mayfair</a>`
        },
        {
            coords: {lat:51.46764,lng:-0.16760},
            content: `<a href="#vagabond_northcote">vagabond northcote rd
            </a>`
        },
        {
            coords: {lat:51.52405,lng:-0.08637},
            content: `<a href="#aviary">aviary</a>`
        },
        {
            coords: {lat:51.53239,lng:-0.07772},
            content: `<a href="#tt">tt liquor</a>`
        },
        {
            coords: {lat:51.54218,lng:-0.10660},
            content: `<a href="#castle">the castle</a>`
        },
        {
            coords: {lat:51.51097,lng:-0.08814},
            content: `<a href="#londonbridge" >london bridge rooftop</a>`
        },
        {
            coords: {lat:51.47165,lng:-0.144088},
            content: `<a href="#no32">no 32 the old town</a>`
        },
        {
            coords: {lat:51.51403,lng:-0.08495},
            content: `<a href="#skygarden">sky garden bars</a>`
        },
        ,{
            coords: {lat:51.52989,lng:-0.07953},
            content: `<a href="#upper5th">upper 5th shoreditch</a>`
        },
        {
            coords: {lat:51.51463,lng:-0.13008},
            content: `<a href="#gate">the gate</a>`
        },
        {
            coords: {lat:51.52971,lng:-0.08475},
            content: `<a href="#goldenbee">golden bee</a>`
        },
        {
            coords: {lat:51.42894,lng:-0.20360},
            content: `<a href="#601">601 quuen's rd</a>`
        },
        {
            coords: {lat:51.47530,lng:-0.06637},
            content: `<a href="#bussey">bussey</a>`
        }

    ]
    
    // Loop through markers array
    for(var i = 0; i < markers.length; i++) {
        addMarker(markers[i]);
    }

    // Call addMarker
    // addMarker({
    //     coords: {lat:51.52582,lng:-0.13385},
    //     content: `<h6>The Wellcome Collection</h6>`
    // });
    // addMarker({
    //     coords: {lat:51.529972,lng:-0.127676},
    //     content: `<h6>The British Library</h6>`
    // });
    
    // addMarker function
    function addMarker(props) {
        var marker = new google.maps.Marker({
            position: props.coords,
            map: map,
        });

       // Add Content to the marker
        var infoWindow = new google.maps.InfoWindow({
            content: props.content,
        });

        marker.addListener('click', function() {
            infoWindow.open(map, marker);
        }); 

    };


}