// scroll text animation

var scrollAnimate = function() {
    $(".scroll").animate({bottom: 20});
    $(".scroll").animate({bottom: 40});
};
setInterval(scrollAnimate, 1000);

// moving page
var loc = 0
var prev_loc = 0
document.addEventListener("wheel", track_movement);

function track_movement(e)
{
    prev_loc=loc
    if (e.deltaY < 0)
    {
        loc--;
        loc = Math.max(loc,0);
    }
    if (e.deltaY > 0)
    {
        loc++;
        loc = Math.min(loc,3);
    }
    move_page(loc,prev_loc)
}


function move_page(loc, prev_loc)
{
    if(loc>prev_loc)
    {
        if(prev_loc==0)
        {
            $(".top-container").slideUp();
        }
        if(prev_loc==1)
        {
            $(".name").slideUp();
        }
        if(prev_loc==2)
        {
            $(".engineer").slideUp();
        }
    }
    if(loc<prev_loc)
    {
        if(prev_loc==1)
        {
            $(".top-container").slideDown();
        }
        if(prev_loc==2)
        {
            $(".name").slideDown();
        }
        if(prev_loc==3)
        {
            $(".engineer").slideDown();
        }
    }
}