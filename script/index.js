// scroll text animation

var scrollAnimate = function() {
    $(".scroll").animate({bottom: 20});
    $(".scroll").animate({bottom: 40});
};
setInterval(scrollAnimate, 1000);

// moving page
var temp = 3
var loc = 0
document.querySelector("body").addEventListener("wheel", track_movement);
function track_movement(e)
{
    if (e.deltaY < 0)
    {
        temp--;
        calc_loc();
    }
    if (e.deltaY > 0)
    {
        temp++;
        calc_loc();
    }
}

function calc_loc()
{
    if(temp==0)
    {
        temp=3;
        loc--;
        loc = Math.max(0,loc);
        move_page(loc, loc+1);
    }
    if(temp==6)
    {
        temp=3;
        loc++;
        loc=Math.min(1,loc);
        move_page(loc, loc-1);
    }
    console.log(temp,loc);
}

function move_page(loc, prev_loc)
{
    if(loc>prev_loc)
    {
        if(prev_loc==0)
        {
            $(".top-container").slideUp();
            $(".scroll").hide();
        }
    }
    else
    {
        if(prev_loc==1)
        {
            $(".top-container").slideDown();
            $(".scroll").show();
        }
    }
}