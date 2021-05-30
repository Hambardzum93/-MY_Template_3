// ..........Navbar ..................
		$(window).on('scroll', function(){
			if($(window).scrollTop()){
				$('nav').addClass('black');
			}
			else
			{
				$('nav').removeClass('black');
			}
// responiv nav
		})
		$(document).ready(function(){
			$('.menu h4').click(function(){
				$('nav ul').toggleClass('active')
			})
			animate_text(sec1_header);
			animate_zoom(sec1);
		})
//logo scrol color
    // $(window).on('scroll', function(){
    //   if($(window).scrollTop() > 590 && $(window).scrollTop() < 9900){
    //     $('.navigat_logo_white').css('display', 'none');
    //     $('.navigat_logo_black').css('display', 'block');
    //   }
    //   else
    //   {
    //     $('.navigat_logo_black').css('display', 'none');
    //     $('.navigat_logo_white').css('display', 'block');
    //   }
//nav scrol color
    $(window).scroll(function(){
      ($(window).scrollTop() > 550 && $(window).scrollTop() < 9900)?
        $('.nav_a').addClass('nav_b'):
      $('.nav_a').removeClass('nav_b');
    });
        
// ...........Section1..................
		function animate_text(element) {
    	transition.begin(element, [
        ["transform", "scale(0.8)", "scale(1,1)", "3s", "ease-in-out"]
    ]);
    	}

    	function animate_zoom(element) {
    	transition.begin(element, [
        ["background-size", "100%", "115%", "3s", "ease-in-out"]
    ]);
		}

	sec1_header = document.querySelector('.sec1_header')
	sec1 = document.querySelector('.sec1')
	

// ..........Section 2..................
var swiper = new Swiper('.swiper-container', {
      slidesPerView: 1.5,
      spaceBetween: 80,
      freeMode: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
       navigation: {
        nextEl: '.swiper-button-next'
       }
    });
// ..........Section 5..................
var swiper2 = new Swiper('.sec5 .swiper-container', {
      slidesPerView: 1.5,
      spaceBetween: 0,
      freeMode: true,
    });
// ............Section 6.......................
var swiper3 = new Swiper('.sec6 .swiper-container', {
      slidesPerView: 4,
      spaceBetween: 20,
      freeMode: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
// ............Section 8.......................
var swiper3 = new Swiper('.sec8 .swiper-container', {
      slidesPerView: 3,
      spaceBetween: 40,
      freeMode: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });

// .....................................................

