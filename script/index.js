$(document).ready(function(){})

// scroll text animation
$(".bottom-container").hide()
$(".middle-container").hide()

var scrollAnimate = function() {
    $(".scroll").animate({bottom: 20});
    $(".scroll").animate({bottom: 40});
};
setInterval(scrollAnimate, 1000);
