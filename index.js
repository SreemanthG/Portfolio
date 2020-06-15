
var glide = new Glide('#project', {
    type: 'carousel',
    perView: 2,
    focusAt: 'center',
    gap:300,
    breakpoints: {
      800: {
        perView: 2
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
  new WOW().init();