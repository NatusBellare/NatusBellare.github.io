var isMobile;

// Identify if visitor on mobile with lame sniffing to remove parallaxing title
if( navigator.userAgent.match(/Android/i) ||
	navigator.userAgent.match(/webOS/i) ||
	navigator.userAgent.match(/iPhone/i) ||
	navigator.userAgent.match(/iPod/i) ||
	navigator.userAgent.match(/iPad/i) ||
	navigator.userAgent.match(/BlackBerry/)
){
	isMobile = true;
}
$(document).ready(function() {

	$('.formula, .cert').slick({
		arrows: false,
		centerMode: true,
		centerPadding: '0',
		slidesToShow: 1,
		speed : 600,
		cssEase: 'ease-in-out',
		responsive: [
			{
				breakpoint: 768,
				settings: {
					arrows: false,
					centerMode: true,
					centerPadding: '0',
					slidesToShow: 1,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 480,
				settings: {
					arrows: false,
					centerMode: true,
					centerPadding: '0',
					slidesToShow: 1
				}
			}
		]
	});

	$('.cert').slick({
		arrows: false,
		centerMode: true,
		centerPadding: '0',
		slidesToShow: 1,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					arrows: false,
					centerMode: true,
					centerPadding: '0',
					slidesToShow: 1,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 480,
				settings: {
					arrows: false,
					centerMode: true,
					centerPadding: '0',
					slidesToShow: 1
				}
			}
		]
	});

	$('.photo').slick({
		speed : 600,
		cssEase: 'ease-in-out'
	});

	if(!isMobile) {
		/*$('.scene, #s3').parallax({
			calibrateX: false,
			calibrateY: true,
			invertX: true,
			invertY: true,
			limitX: false,
			limitY: false,
			scalarX: 2,
			scalarY: 2,
			frictionX: 0.2,
			frictionY: 0.8,
			originX: 0.0,
			originY: 1.0
		});*/
	}


	// $('.about_mass').
	$('.pagetit .nav').scroolly([
		{
			from: 'doc-top',
			to: 'doc-top + 900px',
			css: {
				position: 'absolute',
				top: '30px'
			},
			onCheckIn: function($el) {
				$el.removeClass('nav_open');
				$('.scroller').removeClass('scroller_active');
			}
		},
		{
			from: 'doc-top + 900px',
			css: {
				position: 'fixed',
				top: '0'
			},
			onCheckIn: function($el) {
				setTimeout($el.addClass('nav_open'), 1500);
				$('.scroller').addClass('scroller_active');
			}
		},
		{
			from: 'doc-top + 900px',
			to: 'doc-top',
			css: {
				position: 'absolute',
				top: '30px'
			}
		}
	], $('body'));

	$('.pagein .nav').scroolly([
		{
			from: 'doc-top',
			to: 'doc-top + 30px',
			css: {
				position: 'absolute',
				top: '30px'
			},
			onCheckIn: function($el) {
				$el.removeClass('nav_open');
			}
		},
		{
			from: 'doc-top + 30px',
			css: {
				position: 'fixed',
				top: '0'
			}
		},
		{
			from: 'doc-top + 35px',
			onCheckIn: function($el) {
				setTimeout($el.addClass('nav_open'), 2500);
			}
		},
		{
			from: 'doc-top + 30px',
			to: 'doc-top',
			css: {
				position: 'absolute',
				top: '30px'
			}
		}
	], $('body'));

	$('section').scroolly([
		{
			alias: 'staging',
			from: 'el-top = vp-center',
			to: 'el-bottom = vp-center',
			onCheckIn: function($el){
				$('.scroller__item').removeClass('scroller__item_active');
				$('.scroller__item[href="#'+$el.attr('id')+'"]').addClass('scroller__item_active');
			},
			onDirectionChanged: function($el, direction) {
				(direction < 0) ? $('.scroller__rab').addClass('scroller__rab_rotate') : $('.scroller__rab').removeClass('scroller__rab_rotate');
			},
			onScroll: function($el, offset, length) {
				var $rab = $('.scroller__rab'),
					offset = $('.scroller').offset();
				$(window).on('scroll',function(){
					$rab.addClass('scroller__rab_run');
				});
				$(window).on('scroll',function(){
					$rab.removeClass('scroller__rab_run');
				}, 150)

				if ($rab.hasClass('scroller__rab_rotate')) {
					$rab.css({'transform':'translate(0,'+(offset.top - 1030 ) / 18+'px) rotate(180deg)'})
				} else {
					$rab.css({'transform':'translate(0,'+(offset.top - 1030 ) / 18+'px)'})
				};
				
			}
		}
	], $('body'));

	if(!isMobile) {

		$('.section_title').scroolly([
			{
				from: 'el-top = vp-top',
				to: 'el-bottom = vp-center',
				onCheckIn: function(element, offset, length){
					var progress = offset;
					element.css({
						'top' : $.scroolly.getTransitionFloatValue(0, 40, progress) + 'px'
					});
				}
			},
			{
				from: 'el-top = vp-top',
				to: 'el-bottom = vp-center',
				onScroll: function(element, offset, length){
					var progress = (offset / length) / 2;
					$('#s1').css('margin-top', '-'+$.scroolly.getTransitionFloatValue(0, 50, progress)+'%');
				}
			}
		]);

		$('.section_cert').scroolly([
			{
				from: 'el-top = vp-top',
				to: 'el-bottom = vp-center',
				onCheckIn: function(element, offset, length){
					var progress = offset;
					element.css({
						'top' : $.scroolly.getTransitionFloatValue(0, 40, progress) + 'px'
					});
				}
			},
			{
				from: 'el-top = vp-top',
				to: 'el-bottom = vp-center',
				onScroll: function(element, offset, length){
					var progress = (offset / length) / 2;
					$('#s4').css('margin-top', '-'+$.scroolly.getTransitionFloatValue(0, 40, progress)+'%');
				}
			}
		]);

	};

	$('#s1').scroolly([
		{
			from: 'el-top',
			onCheckIn: function($el){
			   (!($el.hasClass('showed'))) ? $el.addClass('showed') : console.log();
			}
		}
	], $('body'));

	$('#s4').scroolly([
		{
			from: 'el-top = vp-center',
			onCheckIn: function($el){
				(!($el.hasClass('showed'))) ? $el.addClass('showed') : console.log();
			}
		}
	], $('body'));

	$('.scroller__item').on('click', function(e){
		e.preventDefault();
		var id = $(this).attr('href'),
			offsetGt = $(id).offset();
		$('html,body').animate({scrollTop: offsetGt.top}, 500);
	})

	var videoPlaceholder = $('.video__placeholder').attr('src'),
		$videoBlock = $('.video__placeholder').parent();

	$videoBlock.css({'background-image':'url('+videoPlaceholder+')'});

	var $photoItem = $('.photo__item');

	for (var i = 0; i < $photoItem.length; i++ ) {
		photoPlaceholder = $photoItem.eq(i).find('img').attr('src'),
		$photoItem.eq(i).css({'background-image':'url('+photoPlaceholder+')'});
	}

	var $product = $('.product__item');

	for (var i =0; i < $product.length; i++) {
		bg = $product.eq(i).find('a').eq(0).data('bg');
		$product.eq(i).css({'background-image':'url(img/'+bg+'.jpg)'});
	}

	$('.product__item a').on('click', function(e){
		e.preventDefault();
		var $parent =$(this).closest('.product__item');
		bg = $(this).data('bg');
		$parent.find('a').addClass('link_blocked_white');
		$(this).removeClass('link_blocked_white');
		$parent.css({'background-image':'url(img/'+bg+'.jpg)'});
	});

	$(function(){
		$('.link_blocked').on('click', function(e){
			e.preventDefault();
			$('#modalAdd').arcticmodal();
		});
	});

	$('.form__chk, .form__file').styler({
		filePlaceholder: 'Выбрать файлы...',
		fileBrowse: ''
	});

	$('.form__chk').on('change', function(){
		console.log('change');
		$(this).parent().toggleClass('noactive');
		var $inp = $(this).parent().find('.form__inp')
		if ($inp.attr('disabled')) {
			$inp.attr('disabled', false)
		} else {
			$inp.attr('disabled', true)
		}
	});

	$('.form__inp_remark .link_pseudo').on('click', function(){
		$(this).parent().find('.link_pseudo').removeClass('link_active');
		$(this).addClass('link_active');
	});

	// $('.nav__content').on('mouseover', function(){
	// 	$(this).addClass('open');
	// })

	// $('.nav__content').on('mouseout', function(){
	// 	$(this).removeClass('open');
	// 	$('.dropdown-nav').removeClass('show');
	// })

	/*$('.nav__item').on('mouseover', function(){
		$('.nav__content').css({'overflow':'visible'});
		$(this).find('.dropdown-nav').addClass('show')
	})

	$('.nav__item').on('mouseout', function(){
		$('.nav__content').css({'overflow':'hidden'});
		$(this).find('.dropdown-nav').removeClass('show')
	})*/
});
// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.