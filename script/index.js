
var loc = 0
var prev_loc = 0


// scroll text animation

var scrollAnimate = function() {
    $(".scroll").animate({bottom: 10});
    $(".scroll").animate({bottom: 20});
};
setInterval(scrollAnimate, 1000);

//details change

$(document).scroll(track_movement)
function track_movement(){
    var scroll = $(document).scrollTop();
    if(scroll!=0){
        $(".scroll").fadeOut();
    }
    if(scroll==0){
        $(".scroll").fadeIn();
    }
    if(scroll>=0 & scroll<50){
        $(".name").text("I am Divyendu");
    }
    else if(scroll>=50 & scroll<200){
        $(".name").text("Tech Enthusiast");
    }
    else if(scroll>=200 & scroll<350){
        $(".name").text("Web Developer");
    }
    else if(scroll>=350 & scroll<500){
        $(".name").text("Computer Science Engineer");
    }
    prev_loc=loc;
}
