function initMap() {

    /* Map Options */
    var options = {
        zoom: 10,
        center: { lat: 51.509865, lng: -0.118092 },
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        mapTypeControl: true,
        fullscreenControl: false
    }


    /* New Map */
    /* Remote Work */
    var map = new google.maps.Map(document.getElementById('map'), options);

    /* Array of markers */
    var markers = [
        {
            coords: { lat: 51.49360, lng: -0.14845 },
            content: `<a href="#theJones">The Jones Family Kitchen</a>`
        },
        {
            coords: { lat: 51.50969, lng: -0.12215 },
            content: `<a href="#smith&wollensky" >Smith & Wollensky</a>`
        },
        {
            coords: { lat: 51.51612, lng: -0.13647 },
            content: `<a href="#temper">Temper Soho</a>`
        },
        {
            coords: { lat: 51.52798, lng: -0.08205 },
            content: `<a href="#blacklock">Blacklock Shoreditch</a>`
        },
        {
            coords: { lat: 51.50654, lng: -0.09126 },
            content: `<a href="#hawksmoor">Hawksmoor Borough</a>`
        },
        {
            coords: { lat: 51.51183, lng: -0.12866 },
            content: `<a href="#heliot">Heliot Steak House</a>`
        },
        {
            coords: { lat: 51.50191, lng: -0.01815 },
            content: `<a href="#goodman">Goodman Canary Wharf
            </a>`
        },
        {
            coords: { lat: 51.51498, lng: -0.08648 },
            content: `<a href="#lerelais">Le Relais de Venise</a>`
        },
        {
            coords: { lat: 51.51250, lng: -0.11846 },
            content: `<a href="#stk">STK Steakhouse</a>`
        },
        {
            coords: { lat: 51.51982, lng: -0.11724 },
            content: `<a href="#bull">the Bull Expert</a>`
        },
        {
            coords: { lat: 51.51141, lng: -0.14503 },
            content: `<a href="#guinea" >The Guinea Grill</a>`
        },
        {
            coords: { lat: 51.51382, lng: -0.07819 },
            content: `<a href="#omnino">Omnino Steakhouse</a>`
        },
        {
            coords: { lat: 51.50591, lng: -0.09278 },
            content: `<a href="#flat">Flat Iron Square</a>`
        },
        ,
        {
            coords: { lat: 51.51103, lng: -0.02197 },
            content: `<a href="#boisdale">Boisdale of Canary Wharf</a>`
        },
        {
            coords: { lat: 51.49794, lng: -0.21646 },
            content: `<a href="#popeseye">Popeseye Steakhouse</a>`
        },
        {
            coords: { lat: 51.51595, lng: -0.08683 },
            content: `<a href="#mrestaurant">M Restaurant</a>`
        },
        {
            coords: { lat: 51.51515, lng: -0.16110 },
            content: `<a href="#lurra">Lurra</a>`
        },
        {
            coords: { lat: 51.50693, lng: -0.15168 },
            content: `<a href="#cut">Cut at 45 Park Lane</a>`
        }

    ]

    /* Loop through markers array */
    for (var i = 0; i < markers.length; i++) {
        addMarker(markers[i]);
    }

    /* addMarker function */
    function addMarker(props) {
        var marker = new google.maps.Marker({
            position: props.coords,
            map: map,
        });



        /* Add Content to the marker */
        var infoWindow = new google.maps.InfoWindow({
            content: props.content,
        });

        marker.addListener('click', function () {
            infoWindow.open(map, marker);
        });

    };


}


/* stiky top buttom */

window.onload = function () {

    const scrollToTopButton = document.getElementById('js-top');

    const scrollFunc = () => {

        let y = window.scrollY;

        if (y > 0) {
            scrollToTopButton.className = "top-link show";
        } else {
            scrollToTopButton.className = "top-link hide";
        }
    };

    window.addEventListener("scroll", scrollFunc);

    const scrollToTop = () => {

        const c = document.documentElement.scrollTop || document.body.scrollTop;

        if (c > 0) {
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth'
            });
        }
    };

    window.onload = function () {
        scrollToTopButton.onclick = function (event) {
            event.preventDefault();
            scrollToTop();
        }
    }


}
  