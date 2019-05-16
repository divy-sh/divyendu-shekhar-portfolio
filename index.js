// show/hide top bar

$(document).scroll(track);
function track(){
    var e = $(document).scrollTop();
    if(e!=0){
        $(".top-bar").fadeOut();
    }
    else{
        $(".top-bar").fadeIn();
    }
}