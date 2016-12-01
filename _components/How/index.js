var waypoints = $('.how').waypoint({
    handler: function(direction) {
        if (direction === 'down') {
            $('.how').addClass('is-visible')
            console.log('how down')
        } else {
            $('.how').removeClass('is-visible')
            console.log('how up')
        }
    },
    offset: '50%'
})
