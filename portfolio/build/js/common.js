$(function() {
$(document).ready(function(){
			var touch = $('#touch-menu');
		    var menu = $('.ul-nav');

  $(touch).click(function(){
    $(menu).animate({
      width: "toggle"
    });
  });

		    $(window).resize(function(){
		        var wid = $(window).width();
		        if(wid > 778 && menu.is(':hidden')) {
		            menu.removeAttr('style');
		        }
		    });
        $('.a_remove').on('click', function(e){
  menu.removeAttr('style');
        $(".container-button").removeClass('change');
});});
$(document).ready(function(){
$('.header .sl12 .sl').slick({
  dots: true,
  infinite: true,
  speed: 1000,
  arrows: false,
  slidesToShow: 2,
  dots: true,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 780,
      settings: {
        slidesToShow: 1,
        dots: false,
        slidesToScroll: 1,
        infinite: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 370,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
    ]
  
});
$('.object-catalogue .sl').slick({
  dots: false,
  infinite: true,
  speed: 1000,
  slidesToShow: 2,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 780,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
      }
    },
    {
      breakpoint: 370,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
    ]
  
});
$('.object-on-sell .sl').slick({
  dots: false,
  infinite: true,
  speed: 1000,
  slidesToShow: 2,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 780,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
      }
    },
    {
      breakpoint: 370,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
    ]
  
});
$('.our-team .sl').slick({
  dots: false,
  infinite: true,
  speed: 1000,
  slidesToShow: 2,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 780,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
      }
    },
    {
      breakpoint: 370,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
    ]
  
});
$('.slider-object .sl').slick({
  autoplay: false,
  infinite: true,
  speed: 1000,
  asNavFor: '.slider-object .sl2',
  arrows: true
});
$('.slider-object .sl2').slick({
  slidesToShow: 5,
  dots: false,
  centerMode: false,
  speed: 1000,
  centerPadding: '1px',
  asNavFor: '.slider-object .sl',
  focusOnSelect: true,
  arrows: false,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
        sliedeToScroll: 4,
      }
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      }
    },
    {
      breakpoint: 750,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      }
    },
    {
      breakpoint: 540,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});
window.container = $(".sent-message-right");
window.global_container = $(".contact-wrapper");
window.wrapper_get_pdf = $(".wrapper-get-pdf");
window.pop_up_pdf = $(".pop-up-pdf");
window.wrapper_pay_bitcoin = $(".wrapper-pay-bitcoin");
window.pop_up_bitcoin = $(".pop-up-bitcoin");
global_container.hide();
$(".connect").click(function(){
  global_container.show();
  container.show();
});
$(".i-want-pdf").click(function(){
  wrapper_get_pdf.show();
  pop_up_pdf.show();
});
$(".pay-bitcoin").click(function(){
  wrapper_pay_bitcoin.show();
  pop_up_bitcoin.show();
});
$(".b-exit").click(function(){
  global_container.hide();
  container.hide();
  wrapper_get_pdf.hide();
  pop_up_pdf.hide();
  wrapper_pay_bitcoin.hide();
  pop_up_bitcoin.hide();
});
});
var hoper = $(".right-img").css("height");
var proba = $(".proba");
$(proba).css({
    'height': hoper
});
});
