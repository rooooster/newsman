// ;$(document).ready(function () {
//     $('.js-anhors').singlePageNav({
//         // easing: 'easeInOutExpo',
//         speed: 800,
//         currentClass: 'is-selected',
//         offset: 86,
//         updateHash: true
//     });
// });

$('.js-menu').singlePageNav({
    offset: $('.js-menu').outerHeight(),
    filter: ':not(.is-external)',
    updateHash: true,
    beforeStart: function() {
        console.log('begin scrolling');
    },
    onComplete: function() {
        console.log('done scrolling');
    }
});
