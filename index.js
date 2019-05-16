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
$(".button").mouseenter(function(){
    $(".button").clearQueue();
    $(".button").animate({opacity: "0.4"});
});
$(".button").mouseleave(function(){
    $(".button").clearQueue();
    $(".button").animate({opacity: "1"});
});
$(".button").click(function(){
    window.open("Resume.pdf");
});