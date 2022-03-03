function initMap() {

    // Map Options
    var options = {
        zoom: 10,
        center: {lat:51.509865,lng:-0.118092}
    }

    // New Map
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

    //Array if markers
    var markers = [
        {
            coords: {lat:51.52582,lng:-0.13385},
            content: `<a href="#wellcomeCollection">The Wellcome Collection</a>`
        },
        {
            coords: {lat:51.529972,lng:-0.127676},
            content: `<a href="#britishLibrary" >The British Library</a>`
        },
        {
            coords: {lat:51.59177885511457,lng:-0.1429820018890784},
            content: `<a href="#sable">Sable D'Or</a>`
        },
        {
            coords: {lat:51.521376524551144,lng:-0.13473271550019372},
            content: `<a href="#ambrose">The Ambrose Cafe, Heal's</a>`
        },
        {
            coords: {lat:51.58880969653916,lng:-0.040074844332947786},
            content: `<a href="#workSpace">Creative Works Space</a>`
        },
        {
            coords: {lat:51.54830676155435,lng:-0.10669608666431893},
            content: `<a href="#vagabond">Vagabond N7</a>`
        },
        {
            coords: {lat:51.42270171481481,lng:-0.20776925967845764},
            content: `<a href="#wimbletech">Wimbletech Wimbledon</a>`
        },
        {
            coords: {lat:51.47422354579121,lng:0.07725887501669498},
            content: `<a href="#pelican">The Peckham Pelican</a>`
        },
        {
            coords: {lat:51.501963151225816,lng:-0.09229364249091189},
            content: `<a href="#harvard">John Harvard Library</a>`
        },
        {
            coords: {lat:51.52026554939279,lng:-0.07033724433521935},
            content: `<a href="#secondHome">Second Home, Hanbury Street</a>`
        },
        {
            coords: {lat:51.50770658988891,lng:0.019626399839277223},
            content: `<a href="#goodHotel" >The Good Hotel, Royal Victoria Dock</a>`
        },
        {
            coords: {lat:51.49802508791992,lng:-0.014858115501003208},
            content: `<a href="#collectiveCanaryWharf">The Collective Canary Wharf</a>`
        },
        {
            coords: {lat:51.529046170320484,lng:-0.250359086664928},
            content: `<a href="#collectiveOldOak">The Collective Old Oak, North Acton</a>`
        },
        ,{
            coords: {lat:51.49238691926185,lng:-0.1588864866661796},
            content: `<a href="#peterJones">Peter Jones (top floor restaurant), Sloane Square
            </a>`
        },
        {
            coords: {lat:51.49401987208651,lng:-0.15866324433611761},
            content: `<a href="#granger">Granger and Co, Chelsea</a>`
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