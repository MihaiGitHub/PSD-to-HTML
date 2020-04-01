$(document).ready(function () {
    $('.js-wp-2').waypoint(function (direction) {
        $('.js-wp-2').addClass('animated slideInUp');
    }, {
        offset: '70%'
    });
    
    /* With a delay of 2.3 seconds, move this div and animate it from its current position by 3 px */
    $(".iphone-btn").delay(2300).animate({
        top: '+=2px'
    }, 300);
    $(".iphone-btn").delay(1300).animate({
        top: '+=-3px'
    }, 300);
});