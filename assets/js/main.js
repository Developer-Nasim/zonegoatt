(function($) {
  "use strict";
  
 // menu 
  $('.siteBar-btn').click( function (){ 
    $('.mobile-menu').toggleClass('siteBar');   
  }); 
 
  function AutoChange() {
      let mainDiv = document.querySelector('#v-pills-tab')
      let btns = mainDiv.querySelectorAll('.nav-link')
      btns.forEach(btn => { 
        btn.addEventListener('mouseover', (e) => {
          btn.click(); 
        })
      })
      setInterval(() => {
        let btnActive = mainDiv.querySelector('.nav-link.active')
        if (btnActive.nextElementSibling) {
          btnActive.nextElementSibling.click();
        }else{
          btns[0].click()
        }
      }, 3000);

  }
  AutoChange()



  // owlCarousel
  $(".brand-active").owlCarousel({
    loop: true,
    margin: 30,
    items: 6,
    navText: [
      '<i class="fa fa-angle-left"></i>',
      '<i class="fa fa-angle-right"></i>'
    ],
    nav: false,
    dots: false,
    responsive: {
      0: {
        items: 2
      },
      767: {
        items: 3
      },
      992: {
        items: 6
      }
    }
  });
 
 
})(jQuery);
