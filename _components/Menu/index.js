;$(document).ready(function () {
    $('.js-home-menu').singlePageNav({
        offset: $('.js-home-menu').outerHeight(),
        filter: ':not(.is-external)',
        currentClass: 'is-selected',
        updateHash: true,
        easing: 'easeInOutExpo',
        speed: 800,
        // beforeStart: function() {
        //     console.log('begin scrolling');
        // },
        // onComplete: function() {
        //     console.log('done scrolling');
        // }
    });
});
