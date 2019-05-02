$(".bottom-container").hide();
$(".middle-container").hide();

// scroll text animation

var scrollAnimate = function() {
    $(".scroll").animate({bottom: 20});
    $(".scroll").animate({bottom: 40});
};
setInterval(scrollAnimate, 1000);

// moving page
x=0;
document.querySelector("body").addEventListener("wheel", myFunction);
function myFunction(e) {
  if (e.deltaY < 0) {
    x-=100;
    $(".hello").animate({
      width: '300px'
    });
  }
  if (e.deltaY > 0) {
    x+=100;
    $(".hello").animate({
      width: '300px'
    });
  }
};