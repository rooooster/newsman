var waypoints = $('.statistics').waypoint({
    handler: function(direction) {
        if (direction === 'down') {
            $('.statistics').addClass('is-visible')
            console.log('statistics down')
        } else {
            $('.statistics').removeClass('is-visible')
            console.log('statistics up')
        }
    },
    offset: '50%'
})
