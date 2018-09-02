$(function() {
	$(document).ready(function(){
			var touch = $('#touch-menu');
		    var menu = $('.nav');

  $(touch).click(function(){
    $(menu).animate({
      width: "toggle"
    });
  });

		    $(window).resize(function(){
		        var wid = $(window).width();
		        if(wid > 992 && menu.is(':hidden')) {
		            menu.removeAttr('style');
		        }
		    });
        $('.a_remove').on('click', function(e){
  menu.removeAttr('style');
        $(".container-button").removeClass('change');
});

		});
	$(window).scroll(function() {
    var $top = $('.top-line'); // ID шапки
    var $marg = 40
    var wids = $(window).width();
    if(wids > 580) {
    if($(window).scrollTop() > $marg) { 
        $top.addClass('fixed'); 
    } else {
        $top.removeClass('fixed'); 
    }}

});
$(document).on('click', '.video-img1', function() {
  var $video = $('.iframe1'),
    src = $video.attr('src');
 
  $video.attr('src', src + '&autoplay=1');
});
$(document).on('click', '.video-img2', function() {
  var $video1 = $('.iframe2'),
    src = $video1.attr('src');
 
  $video1.attr('src', src + '&autoplay=1');
});
$(document).on('click', '.video-img3', function() {
  var $video2 = $('.iframe3'),
    src = $video2.attr('src');
 
  $video2.attr('src', src + '&autoplay=1');
});
$(document).ready(function(){
   $(".video-img1").on('click', function(e) {
           $(".iframe1").css("display", "block");
           $(".video-img1").css("display", "none");
        });
    $(".video-img2").on('click', function(e) {
           $(".iframe2").css("display", "block");
           $(".video-img2").css("display", "none");
        });
    $(".video-img3").on('click', function(e) {
           $(".iframe3").css("display", "block");
           $(".video-img3").css("display", "none");
        });

  });
$(document).ready(function(){
$('.advice .sl').slick({
  dots: false,
  infinite: true,
  speed: 200,
  slidesToShow: 3,
  slidesToScroll: 1,
  draggable: false,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 780,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
    ]
  
});
});
$(document).ready(function(){
$('.plan-trainer .sl').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 2,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 780,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
    ]
  
});
});
$(document).ready(function(){
$('.result .sl').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 780,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
    ]
  
});
});
$(document).ready(function(){
$('.result-about .sl').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 780,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true
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
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
    ]
  
});
});
$(document).ready(function(){
$('.clientage .sl').slick({
  dots: false,
  infinite: true,
  speed: 1000,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 780,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true
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
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
    ]
  
});
$('.circle-plus').on('click', function(){
  $(this).toggleClass('opened');
})
$('.plus1').on('click', function(){
  $(".plus-appear1").toggle();
})
$('.plus2').on('click', function(){
  $(".plus-appear2").toggle();
})
$('.plus3').on('click', function(){
  $(".plus-appear3").toggle();
})
$('.plus4').on('click', function(){
  $(".plus-appear4").toggle();
})
$('.plus5').on('click', function(){
  $(".plus-appear5").toggle();
})
$('.plus6').on('click', function(){
  $(".plus-appear6").toggle();
})
$('.first-table').on('click', function(){
  $('.bottom-arrow1').css('visibility', 'visible');
  $('.bottom-arrow2').css('visibility', 'hidden');
  $('.spoiler-choise').css('display', 'block');
  $('.spoiler-choise-two').css('display', 'none')
})
$('.two-table').on('click', function(){
  $('.bottom-arrow2').css('visibility', 'visible');
  $('.bottom-arrow1').css('visibility', 'hidden');
  $('.spoiler-choise').css('display', 'none');
  $('.spoiler-choise-two').css('display', 'block');
})
});
$(document).ready(function(){
  var team = $('.wrapper-result-appear');
  var team3 = $('.wrapper-result-3');
  var team2 = $('.wrapper-result-2');
  var team1 = $('.wrapper-result-1');
  var hoper = $(".foto-choise").css("height");
  var hoper_one = $(".advice .foto-choise").css("height");
  var wid = $(window).width();
  var my_slick_prev = $(".plan-trainer .sl12 .sl .slick-prev");
  var my_slick_next = $(".plan-trainer .sl12 .sl .slick-next");
  var my_slick_prev_one = $(".advice .sl12 .sl .slick-prev");
  var my_slick_next_one = $(".advice .sl12 .sl .slick-next");
$('form input[type=file]').on('change', function(){
  $('.wrapper-clip').css({
    'background-image': 'url(../img/blue-clip.png)'
});
})
$(".wrapper-clip").click(function () {
    $(".button-clip").trigger('click');
});
$(my_slick_prev).css({
    'height': hoper
});
$(my_slick_next).css({
    'height': hoper
});
$(my_slick_prev_one).css({
    'height': hoper_one
});
$(my_slick_next_one).css({
    'height': hoper_one
});
$(".button_team").on('click', function(e) {
  team.slideToggle();
  if(wid < 1199) {
                team3.slideToggle();
            }
  if(wid < 992) {
                team2.slideToggle();
            }
  if(wid < 568) {
                team1.slideToggle();
            }
        });
  
});
});
