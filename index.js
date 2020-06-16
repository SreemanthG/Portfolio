
var glide = new Glide('#project', {
    type: 'carousel',
    perView: 2,
    focusAt: 'center',
    gap:300,

    breakpoints: {
      1200: {
        perView: 1,
        
      },
      480: {
        perView: 1
      }
    }
  })
  glide.mount();
new Glide('#blog', {
    type: 'carousel',
    perView: 3,
    focusAt: 'center',
    breakpoints: {
      800: {
        perView: 2
      },
      480: {
        perView: 1
      }
    }
  }).mount();
var container = document.querySelector(".testcon")
  emergence.init({
    container: container,
    reset: true,
    handheld: true,
    throttle: 250,
    elemCushion: 0.999999,
    offsetTop: 0,
    offsetRight: 0,
    offsetBottom: 0,
    offsetLeft: 0,
    callback: function(element, state) {
      if (state === 'visible') {
        console.log('Element is visible.');
      } else if (state === 'reset') {
        console.log('Element is hidden with reset.');
      } else if (state === 'noreset') {
        console.log('Element is hidden with NO reset.');
      }
    }
  });

  // ScrollReveal().reveal('.headline');
  // ScrollReveal({ reset: true, delay: 2000  });
  // new WOW().init();
  $(document).ready(function(){
    $(".icon-line2-camera").hover(function(){
    $(this).addClass("rotate-scale-up");
    }, function(){
    $(this).removeClass("rotate-scale-up");
    });
    $(".icon-line2-camera").click(function(){
    $(this).closest(".flip-card").toggleClass("hovered"); 
    });
    });

    var currentX = '';
var currentY = '';
var movementConstant = .015;
$(document).mousemove(function(e) {
  if(currentX == '') currentX = e.pageX;
  var xdiff = e.pageX - currentX;
  currentX = e.pageX;
   if(currentY == '') currentY = e.pageY;
  var ydiff = e.pageY - currentY;
  currentY = e.pageY; 
  $('.parallax div').each(function(i, el) {
      var movement = (i + 1) * (xdiff * movementConstant);
	  var movementy = (i + 1) * (ydiff * movementConstant);
      var newX = $(el).position().left + movement;
	  var newY = $(el).position().top + movementy;
      $(el).css('left', newX + 'px');
	  $(el).css('top', newY + 'px');
  });
});

  
if(window.location.hash) {

  var offset = -100;

  // smooth scroll to the anchor id
  $('html, body').animate({
      scrollTop: ($(window.location.hash).offset().top + offset) + 'px'
  }, 1000, 'swing');
}    