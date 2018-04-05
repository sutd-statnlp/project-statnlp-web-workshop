/*
 * Evento -  Event html  Template
 * Build Date: jan 2018
 * Author: colorlib
 * Copyright (C) 2018 colorlib
 */
 /* ------------------------------------- */
/*  TABLE OF CONTENTS
 /* ------------------------------------- */
/*   PRE LOADING                          */
/*   WOW                                 */
/*   sliders                      */
/*    MAPS                               */
/*   COUNTER JS              */



    /* ==============================================
/*  PRE LOADING
  =============================================== */
'use strict';
$(window).load(function() {
    $('.loader').delay(0).fadeOut('slow');
});


$(document).ready(function() {

    'use strict';
    /* ==============================================
     /*   wow
      =============================================== */
    var wow = new WOW(
        {
            animateClass: 'animated',
            offset: 10,
            mobile: true
        }
    );
    wow.init();
    /* ==============================================
        STICKY HEADER
        =============================================== */

    $(window).on('scroll', function () {
        if ($(window).scrollTop() < 100) {
            $('.header').removeClass('sticky_header');
        } else {
            $('.header').addClass('sticky_header');
        }
    });
    /* --------------------------------------------------------
     COUNTER JS
     ----------------------------------------------------------- */

    $('.counter').counterUp({
        delay: 5,
        time: 3000
    });

    $(".countdown")
        .countdown("2018/07/13", function(event) {
            $(this).html(
                event.strftime('<div>%w <span>Weeks</span></div>  <div>%D <span>Days</span></div>  <div>%H<span>Hours</span></div> <div>%M<span>Minutes</span></div> <div>%S<span>Seconds</span></div>')
            );
        });

    /* ==============================================
     SLIDER
     =============================================== */
    $(".cover_slider").owlCarousel({
        loop:true,
        autoplay:true,
        smartSpeed:1000,
        autoplayHoverPause:false,
        dots:true,
        nav:false,
        items:1,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        dotsContainer: '.cover_dots'
    });

    $(".brand_carousel").owlCarousel({
        loop:true,
        autoplay:true,
        smartSpeed:450,
        autoplayHoverPause:false,
        dots:false,
        nav:false,
        responsiveClass:true,
        responsive:{
            0:{
                items:2
            },
            600:{
                items:2

            },
            1000:{
                items:2

            }
        },
        items:2
    });
    /* ------------------------------------- */
    /* Animated progress bars
     /* ------------------------------------- */

    var waypoints = $('.progress_container').waypoint(function() {
        $('.progress .progress-bar').progressbar({
            transition_delay: 1000
        });
    },{
        offset: '50%'
    });


        /* --------------------------------------------------------
    MAPS
    ----------------------------------------------------------- */
    var map = $('#map');
    if(map.length > 0) {
        google.maps.event.addDomListener(window, 'load', init);
        var lattuide = map.attr('data-lat');
        var longtuided = map.attr('data-lon');
    }
    function init() {
        // Basic options for a simple Google Map
        // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
        var mapOptions = {
            // How zoomed in you want the map to start at (always required)
            zoom: 16,
            // The latitude and longitude to center the map (always required)
            center: new google.maps.LatLng(lattuide, longtuided)
        };

        // Get the HTML DOM element that will contain your map
        // We are using a div with id="map" seen below in the <body>
        var mapElement = document.getElementById('map');

        // Create the Google Map using our element and options defined above
        var map = new google.maps.Map(mapElement, mapOptions);

        // Let's also add a marker while we're at it
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(lattuide, longtuided),
            map: map,
            title: 'StatNLP!'
        });
    }

});
