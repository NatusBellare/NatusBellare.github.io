$(document).ready(function(e) {	
	//promo-crl
	try{
		$('.promo-crl').owlCarousel({
			loop: true,
			nav:true,
			dots: false,
			autoplay: false,
			responsive:{
				0:{
					items:1
				}
			}
		});
	}catch(e){}
	
	//styler
	try{
		$('.styler').styler();
	}catch(e){}
	
	//scroll
	try{
		$('.scroll, .table-scroll').mCustomScrollbar();
	}catch(e){}
	
	//slider
	try{
		$('.time-slider:not(.type2)').range2DSlider({
			template:'horizontal',
			value:[[6,0],[8,0]],
			onlyGridPoint:true,
			round:true,
			axis:[[6,7,8,9,10]]
		});
		$('.time-slider.type2').range2DSlider({
			template:'horizontal',
			value:[[6,0],[8,0]],
			onlyGridPoint:true,
			round:true,
			axis:[[6,7,8,9,10,11]]
		});
	}catch(e){}
	
	$('.time-slider + .xdsoft_range2dslider .xdsoft_legend').each(function(index, element) {
        $(this).text($(this).text()+':00')
    });
	
	try{
		$('.price-slider .slider').range2DSlider({
			template:'horizontal',
			value:[[0,0],[15000,0]],
			onlyGridPoint:true,
			round:true,
			axis:[[0,20000]]
		});
	}catch(e){}
	
	/*$('.price-range .xdsoft_legend:last-child').text(addCommas($('.price-range .xdsoft_legend:last-child').text()));
	$('.price-range .xdsoft_slider_label').each(function(index, element) {
        $(this).text(addCommas('15000'))
    });*/
	
	//catalog-crl
	try{
		$('.catalog-crl .crl').owlCarousel({
			loop: true,
			nav:true,
			dots: false,
			autoplay: false,
			margin: 25,
			responsive:{
				0:{
					items:1
				},
				400:{
					items:2
				},
				900:{
					items: 3
				}
			}
        });
		
		var slider_360 = $('.slider-360');
			slider_360.owlCarousel({
				loop: true,
				nav:false,
				dots: false,
				autoplay: false,
				margin: 0,
				responsive:{
					360:{
						items:1
					}
				}
			});
		
	}catch(e){}
	
	cell()
	$(window).resize(function(e) {
        cell();
    });
	
	//popup
	$('[popup-target]').click(function(e) {
		var el = $(this);
		var target = el.attr('popup-target');
		$('.overlay').fadeIn(200, function(){
			$('.popup.'+target).fadeIn(200);
			var top = document.documentElement.clientHeight / 2 - $('.popup.'+target).height() / 2 + $(window).scrollTop();
			var left =  document.documentElement.clientWidth / 2 - $('.popup.'+target).width() / 2;
			$('.popup.'+target).css('top', top);
			$('.popup.'+target).css('left', left);
		})
        return false;
    });
	$('.popup > .close, .overlay').click(function(e) {
		var popup = $('.popup:visible');
		$(popup).fadeOut(200, function(){
			$('.overlay').fadeOut(200);
		});
        return false;
    });
	
	//
	$('.top-bar .top-bar-btn > span').click(function(){
		if(!$('.top-bar .top-bar-btn .sub:visible').length){
			$('.top-bar .top-bar-btn .sub').show();
		}else{
			$('.top-bar .top-bar-btn .sub').hide();
		}
	})
	
	//spices
	$('.spices a').click(function(e) {
		var el = $(this);
		if(!el.hasClass('active')){
			el.closest('.spices').find('.active').removeClass('active');
			el.addClass('active');
		}
        return false;
    });
	
	//
	$('.user-data .select-time a').click(function(e) {
		var el = $(this);
		if(!el.hasClass('active')){
			$('.user-data .select-time .active').removeClass('active');
			el.addClass('active');
		}
        return false;
    });
	
	//
	$('body').click(function(e) {
		if(!$('.catalog-crl').length){
			$('.catalog-list .hover').removeClass('hover');
		}
    });
	if($('.desktop').length){
		$('div:not(.catalog-crl) .catalog-list .item').hover(function(e) {
			e.stopPropagation();
			var el = $(this);
			if(!el.hasClass('hover')){
				$('div:not(.catalog-crl) .catalog-list .hover').removeClass('hover');
				el.addClass('hover');
			}
		});
	}else{
		$('div:not(.catalog-crl) .catalog-list .item').click(function(e) {
			e.stopPropagation();
			var el = $(this);
			if(!el.hasClass('hover')){
				$('div:not(.catalog-crl) .catalog-list .hover').removeClass('hover');
				el.addClass('hover');
			}
		});
	}
	
});

//addCommas
function addCommas(nStr)
{
  nStr += '';
  x = nStr.split('.');
  x1 = x[0];
  x2 = x.length > 1 ? '.' + x[1] : '';
  var rgx = /(\d+)(\d{3})/;
  while (rgx.test(x1)) {
    x1 = x1.replace(rgx, '$1' + ' ' + '$2');
  }
  return x1 + x2;
}

function cell(){
	$('.cell').width($(document).width()).height(document.documentElement.clientHeight-321)
}