$(document).ready(function () {
    $('.js-mobmenu-open, .js-mobmenu-close, .js-mobmenu-overlay, .mobmenu .js-home-menu .is-interior').on('click', function(event) {
        $('.js-mobmenu, .js-mobmenu-overlay, body').toggleClass('is-open');
        event.preventDefault();
    });
});
