
$(document).ready(function() {
  //Preloader
  preloaderFadeOutTime = 500;
  function hidePreloader() {
  var preloader = $('.overlay');

  preloader.css({
    display:"none"
  })
  }
  window.onload = hidePreloader;
  // hidePreloader();
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
// $(document).ready(function() {
//   var counter = 0;

//   // Start the changing images
//   setInterval(function() {
//     if(counter == 9) { 
//       counter = 0; 
//     }

//     changeImage(counter);
//     counter++;
//   }, 3000);

//   // Set the percentage off
//   // loading();
// });

// function changeImage(counter) {
//   var images = [
//     '<i class="fa fa-fighter-jet"></i>',
//     '<i class="fa fa-gamepad"></i>',
//     '<i class="fa fa-headphones"></i>',
//     '<i class="fa fa-cubes"></i>',
//     '<i class="fa fa-paw"></i>',
//     '<i class="fa fa-rocket"></i>',
//     '<i class="fa fa-ticket"></i>',
//     '<i class="fa fa-pie-chart"></i>',
//     '<i class="fa fa-codepen"></i>'
//   ];

//   $(".loader .image").html(""+ images[counter] +"");
// }

// function loading(){
//   var num = 0;

//   for(i=0; i<=100; i++) {
//     setTimeout(function() { 
//       $('.loader span').html(num+'%');

//       if(num == 100) {
//         loading();
//       }
//       num++;
//     },i*120);
//   };

// }

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
// new Glide('#blog', {
//     type: 'carousel',
//     perView: 3,
//     focusAt: 'center',
//     breakpoints: {
//       800: {
//         perView: 2
//       },
//       480: {
//         perView: 1
//       }
//     }
//   }).mount();
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

// var container = document.querySelector(".testcon")
//   emergence.init({
//     container: container,
//     reset: true,
//     handheld: true,
//     throttle: 250,
//     elemCushion: 0.999999,
//     offsetTop: 0,
//     offsetRight: 0,
//     offsetBottom: 0,
//     offsetLeft: 0,
//     callback: function(element, state) {
//       if (state === 'visible') {
//         console.log('Element is visible.');
//       } else if (state === 'reset') {
//         console.log('Element is hidden with reset.');
//       } else if (state === 'noreset') {
//         console.log('Element is hidden with NO reset.');
//       }
//     }
//   });

  // ScrollReveal().reveal('.headline');
  // ScrollReveal({ reset: true, delay: 2000  });
  // new WOW().init();

   

  
if(window.location.hash) {

  var offset = -100;

  // smooth scroll to the anchor id
  $('html, body').animate({
      scrollTop: ($(window.location.hash).offset().top + offset) + 'px'
  }, 1000, 'swing');
}    

//gallery

// $(function() {
//   var selectedClass = "";
//   $(".filter").click(function(){
//   selectedClass = $(this).attr("data-rel");
//   $("#gallery").fadeTo(100, 0.1);
//   $("#gallery div").not("."+selectedClass).fadeOut().removeClass('animation');
//   setTimeout(function() {
//   $("."+selectedClass).fadeIn().addClass('animation');
//   $("#gallery").fadeTo(300, 1);
//   }, 300);
//   });
//   });