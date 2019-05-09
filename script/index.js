
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
        $(".expl").fadeOut();

    }
    else if(scroll>=200 & scroll<400){
        $(".name").text("Tech Enthusiast");
        $(".expl").text("I love playing with new teach and always love it when something innovative comes in the market.");
        $(".expl").fadeIn();
    }
    else if(scroll>=400 & scroll<600){
        $(".name").text("Web Developer");
        $(".expl").text("I can develop websites like this one. I am still learning the backend development though.");
    }
    else if(scroll>=600 & scroll<800){
        $(".name").text("Computer Science Engineer");
        $(".expl").text("I am currently pursuing Engineering in Computer Science and expect to finish it by the end of 2019.");
    }
    prev_loc=loc;
}
