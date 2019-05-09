
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
    if(scroll>=0 & scroll<200){
        $(".name").text("I am Divyendu");
        $(".name").css("font-size", "2.5em")
    }
    else if(scroll>=200 & scroll<400){
        $(".name").text("Tech Enthusiast");
        $(".name").css("font-size", "2.25em")
    }
    else if(scroll>=400 & scroll<600){
        $(".name").text("Web Developer");
        $(".name").css("font-size", "2em")
        
    }
    else if(scroll>=600 & scroll<800){
        $(".name").text("Computer Science Engineer");
        $(".name").css("font-size", "1.75em")
    }
    prev_loc=loc;
}
