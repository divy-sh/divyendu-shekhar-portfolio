// scroll text animation
$(document).ready(function(){
    document.querySelector('.top-container').scrollIntoView();
    $(".top-container").slideDown();
    $(".scroll").fadeIn();
    $(".name").slideDown();
    $(".tech").slideDown();
    $(".webdev").slideDown();
    $(".engineer").slideDown();
    $(".ai").slideDown();
    $(".middle-container").slideDown();
});
var scrollAnimate = function() {
    $(".scroll").animate({bottom: 10});
    $(".scroll").animate({bottom: 20});
};
setInterval(scrollAnimate, 1000);

// moving page

var loc = 0
var prev_loc = 0

//Touch

$(document).swipe( {
    swipe:function(event, direction, distance, duration, fingerCount, fingerData) {
    if(direction=="up"){
        update_loc(+1);
    }
    else if(direction=="down"){
        update_loc(-1);
    }
    },
    threshold:0
});

//Scrollwheel

document.addEventListener("wheel", track_movement);
function track_movement(e){
    if (e.deltaY < 0){
        update_loc(-1);
    }
    if (e.deltaY > 0){
        update_loc(+1);
    }
}

//keys

$(document).keydown(function(e){
    console.log(e.key)
    if(e.key=="ArrowDown" || e.key=="PageDown"){
        update_loc(+1);
    }
    if(e.key=="ArrowUp" || e.key=="PageUp"){
        update_loc(-1);
    }
});

//update location

function update_loc(i){
    prev_loc=loc;
    if(i==-1){
        loc--;
        loc = Math.max(loc,0);
    }
    else{
        loc++;
        loc = Math.min(loc,7);
    }
    move_page(loc,prev_loc);
}

//movement function

function move_page(loc, prev_loc){
    if(loc>prev_loc){
        if(prev_loc==0){
            $(".top-container").slideUp();
            $(".scroll").fadeOut();
        }
        if(prev_loc==1){
            $(".name").slideUp();
        }
        if(prev_loc==2){
            $(".tech").slideUp();
        }
        if(prev_loc==3){
            $(".webdev").slideUp();
        }
        if(prev_loc==4){
            $(".engineer").slideUp();
        }
        if(prev_loc==5){
            $(".ai").slideUp();
        }
        if(prev_loc==6){
            $(".middle-container").slideUp();
        }
    }
    if(loc<prev_loc){
        if(prev_loc==1){
            $(".top-container").slideDown();
            $(".scroll").fadeIn();
        }
        if(prev_loc==2){
            $(".name").slideDown();
        }
        if(prev_loc==3){
            $(".tech").slideDown();
        }
        if(prev_loc==4){
            $(".webdev").slideDown();
        }
        if(prev_loc==5){
            $(".engineer").slideDown();
        }
        if(prev_loc==6){
            $(".ai").slideDown();
        }
        if(prev_loc==7){
            $(".middle-container").slideDown();
        }
    }
}