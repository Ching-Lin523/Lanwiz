$("#carousel").owlCarousel({
    autoplay: false,
    lazyLoad: false,
    loop: true,
    margin: 0,
     /*
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    */
    responsiveClass: true,
    autoHeight: true,
    autoplayTimeout: 7000,
    smartSpeed: 800,
    nav: true,
    responsive: {
      0: {
        items: 4
      },
  
      720: {
        items: 4
      },
  
      1024: {
        items: 6
      },
  
      1366: {
        items: 8
      }
    }
  });