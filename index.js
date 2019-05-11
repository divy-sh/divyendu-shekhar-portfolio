$(document).scroll(track);
function track(){
    var e = $(document).scrollTop();
    if(e!=0){
        $(".top-bar").fadeOut();
        console.log("up");
    }
    else{
        $(".top-bar").fadeIn();
        console.log("down");
    }
}