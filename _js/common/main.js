;$(document).ready(function () {


    // features
    $(".features").addClass("is-visible");


    // moreinfo
    $(".moreinfo").addClass("is-visible");


    // menu
    $('.js-home-menu').singlePageNav({
        // offset: $('.js-home-menu').outerHeight(),
        filter: ':not(.is-external)',
        currentClass: 'is-selected',
        updateHash: true,
        easing: 'easeInOutExpo',
        speed: 0,
        // beforeStart: function() {
        //     console.log('begin scrolling');
        // },
        // onComplete: function() {
        //     console.log('done scrolling');
        // }
    });


    // history
    $(document).on('click', '.menu__item', function(){
        // console.log(window.location.hash);
        var hash = window.location.hash;
        history.replaceState(undefined, undefined, hash)
    })


    // mobmenu
    $('.js-mobmenu-open, .js-mobmenu-close, .js-mobmenu-overlay, .mobmenu .js-home-menu .is-interior').on('click', function(event) {
        $('.js-mobmenu, .js-mobmenu-overlay, body').toggleClass('is-open');
        event.preventDefault();
    });
});


// how
var waypoints = $('.how').waypoint({
    handler: function(direction) {
        if (direction === 'down') {
            $('.how').addClass('is-visible')
            // console.log('how down')
        } else {
            $('.how').removeClass('is-visible')
            // console.log('how up')
        }
    },
    offset: '50%'
})


// statistics
var waypoints = $('.statistics').waypoint({
    handler: function(direction) {
        if (direction === 'down') {
            $('.statistics').addClass('is-visible')
            // console.log('statistics down')
        } else {
            $('.statistics').removeClass('is-visible')
            // console.log('statistics up')
        }
    },
    offset: '50%'
})


// statistics
window.sr = ScrollReveal({ reset: true }).reveal('.features__clients ul li img, .moreinfo__list-item');
