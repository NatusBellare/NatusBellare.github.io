"use strict";
$(function(){

	$('.bigImgBlock .box').css('height', $(window).height()/2+"px");
	$('.boxSmall,.boxSmall img').css('height', $(window).height()/3+"px");

	//scrollSections.customScrollTo(1);
	scrollWin();
	

	$(".menuBtn").click(function(){
		$(this).toggleClass('open');
		$('.mainMenu ul').slideToggle();
	});

	$(window).resize(function() {
		$('.menuBtn').removeClass('open');
		$('.mainMenu ul').removeAttr('style');
	});

	$('#owlCarousel').owlCarousel({
	    loop: true,
	    margin:0,
	    nav:true,
	    navText: [ '<span class="arrow_carrot-left" aria-hidden="true"></span>', '<span class="arrow_carrot-right" aria-hidden="true"></span>' ],
	    responsive:{
	        0:{
	            items:1
	        },
	        767:{
	            items:4
	        },
	    }
	})

	$('#owlCarousel2').owlCarousel({
	    loop: true,
	    margin:0,
	    nav:true,
	    navText: [ '<span class="arrow_carrot-left" aria-hidden="true"></span>', '<span class="arrow_carrot-right" aria-hidden="true"></span>' ],
	    responsive:{
	        0:{
	            items:1
	        },
	        767:{
	            items:2
	        },
	    }
	})

	$('#owlCarousel3').owlCarousel({
	    loop: true,
	    margin:0,
	    nav:true,
	    navText: [ '<span class="arrow_carrot-left" aria-hidden="true"></span>', '<span class="arrow_carrot-right" aria-hidden="true"></span>' ],
	    responsive:{
	        0:{
	            items:1
	        },
	        767:{
	            items:4
	        },
	    }
	});

	$('#owlCarousel4').owlCarousel({
	    loop: true,
	    margin:0,
	    nav:true,
	    navText: [ '<span class="arrow_carrot-left" aria-hidden="true"></span>', '<span class="arrow_carrot-right" aria-hidden="true"></span>' ],
	    items:1,
	});

	$('#owlCarousel5').owlCarousel({
	    loop: true,
	    margin:0,
	    nav:true,
	    navText: [ '<span class="arrow_carrot-left" aria-hidden="true"></span>', '<span class="arrow_carrot-right" aria-hidden="true"></span>' ],
	    responsive:{
	        0:{
	            items:1
	        },
	        767:{
	            items:4
	        },
	    }
	})

	

	$(window).scroll(function(){
		if($(window).scrollTop() >= $('.pricing').offset().top-400){
			price('#price1', 99);
			price('#price2', 299);
			price('#price3', 499);
			price('#price4', 999);
		}else{
			a = 0;
			//$("#price1, #price2, #price4, #price4").text(0);
		}

		if($(window).scrollTop() >= $('.meet').offset().top + 400){
			$('.chart1').circliful();
			$('.chart2').circliful();
			$('.chart3').circliful();
		}
	});
	
	$('.main > div > div, footer').appear(function(){
		$(this).addClass('fadeInUp animated');
	});
	
	//Enable scroll points
	if($(window).width() > 767){
    	$('.scrollPoint').scrollSections({alwaysStartWithFirstSection : false});
    }
	
	//enable zoomIn portfolio effect
	$(".zoomIn").click(function(){
		ZoomIn($(this).parents(".boxSmall"),$(this).next());
		return false
	});
	$(".closebtn").click(function(){
		ZoomReset();
		return false
	});

});

var a = 0;
function price(arg, i){
	a = a + 1;
	if(a <= i){
		$(arg).text(a);
	}else{
		$(arg).text(i);
	}
	setTimeout(function(){
		price(arg, i);
	}, 10);
}


function scrollWin() {
	
}



var London = new google.maps.LatLng(51.508742,-0.120850);
        

var image = {
    url: 'img/marker.png',
    // This marker is 20 pixels wide by 32 pixels tall.
    size: new google.maps.Size(50, 75),
    // The origin for this image is 0,0.
    origin: new google.maps.Point(0,0),
    // The anchor for this image is the base of the flagpole at 0,32.
    anchor: new google.maps.Point(25, 75)
};

var stylez = [
    {
      featureType: "all",
      elementType: "all",
      stylers: [
        { saturation: -100 } // <-- THIS
      ]
    }
];

function initialize(){
    var mapProp = {
        center: London,
        zoom:5,
        scrollwheel: false,
        mapTypeId:google.maps.MapTypeId.ROADMAP
    };
    
    var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
    
    var mapType = new google.maps.StyledMapType(stylez, { name:"Grayscale" });    
	map.mapTypes.set('tehgrayz', mapType);
	map.setMapTypeId('tehgrayz');
    
    
    /*******/

    var markLondon = new google.maps.Marker({ 
        position: London, 
        icon: image
    });
    markLondon.setMap(map);
    
    /*******/
}

google.maps.event.addDomListener(window, 'load', initialize);



function play() {
		$('.video .bg').hide();
        document.getElementById('video-wrap').innerHTML = '<iframe src="https://www.youtube.com/embed/hR3fDLf8tt0?autoplay=1&rel=0&showinfo=0" frameborder="0" allowfullscreen></iframe>';
    }

function preventDefault(e) {
  e = e || window.event;
  if (e.preventDefault)
      e.preventDefault();
  e.returnValue = false;  
}

function keydown(e) {
    for (var i = keys.length; i--;) {
        if (e.keyCode === keys[i]) {
            preventDefault(e);
            return;
        }
    }
}

function wheel(e) {
  preventDefault(e);
}
var scrollAlowed = 1;

function disable_scroll() {
	
  scrollAlowed=0;
  if (window.addEventListener) {
      window.addEventListener('DOMMouseScroll', wheel, false);
  }
  window.onmousewheel = document.onmousewheel = wheel;
  document.onkeydown = keydown;
}

function enable_scroll() {
	scrollAlowed = 1;
    if (window.removeEventListener) {
        window.removeEventListener('DOMMouseScroll', wheel, false);
    }
    window.onmousewheel = document.onmousewheel = document.onkeydown = null;  
}

function prefixed(element,point) {
	$(element).css("-webkit-transform-origin",point);
	$(element).css("-moz-transform-origin",point);
	$(element).css("-o-transform-origin",point);
	$(element).css("-ms-transform-origin",point);
	$(element).css("transform-origin",point);
}

var savescrollPosition;

function ZoomIn(src,dest) {
	disable_scroll();
	var afterZoom = function(){$("#zoomin_container").css("z-index","1");}
	
	$("#zoomin_container").removeClass("hidden");
	
	$("#wunderland").html($(dest).html());
	savescrollPosition = $(document).scrollTop();
	$('html,body').animate({
                        scrollTop: $("#zoomin_container").offset().top
                    }, 500);
					
	var layout = {};
	layout.offset = $(src).offset();
	layout.sizes = {
			width: $(src).width(),
			height: $(src).height()
		};	
	layout.center = {
			left: (layout.offset.left + layout.sizes.width/2) / $(document).width() * 100,
			top: ($(src).position().top + layout.sizes.height/2) / $(".smallImgBlock").height() * 100
		};
	layout.scale = {
			x: $(window).width()  / layout.sizes.width * (1+Math.abs(layout.center.left-50)/50),
			y: $(window).height()  / layout.sizes.height * (1+Math.abs(layout.center.top-50)/50)
		};
	layout.scale.max = Math.max(layout.scale.x, layout.scale.y);
	prefixed($(".smallImgBlock"),layout.center.left.toFixed(3)+"% "+layout.center.top.toFixed(3)+"% ");
	$('body').addClass('stop-scrolling');
	$(src).attr("data-zoommed",1);
	
	$(src).removeClass("fadeIn");
	$(src).addClass("fadeOut");
	
	
	//$("#portfolioThumbs").velocity({ scale: layout.scale.max }, 700, 'easeInOutCubic',afterZoom);
		
	$("#portfolioThumbs").addClass("zoomInHole").removeClass("zoomInHoleReset");
	setTimeout(function(){ afterZoom(); }, 700);
}

function ZoomReset() {
	enable_scroll();
	
	/* slow
	$('html,body').animate({
                        scrollTop: savescrollPosition
    }, 500);
	*/
	$('body').scrollTop(savescrollPosition);
	
	$("#zoomin_container").css("z-index","-1");
	
	$("*[data-zoommed=1]").removeClass("fadeOut");
	$("*[data-zoommed=1]").addClass("fadeIn");

	$("#portfolioThumbs").removeClass("zoomInHole");
	$("#portfolioThumbs").addClass("zoomInHoleReset");
	/* slow
	$(".smallImgBlock").velocity({ scale: 1 }, 700, 'easeInOutCubic',function(){$('body').removeClass('stop-scrolling')});
	*/
}

$(document).ready(function(){
    $(".quote").hover(function(){
        $(".quote-text").text($(this).attr("data-text"));
    });
    
    $(".boxSmall").mousemove(function(){
        $(".img-featured ").attr("src",$(this).children("img").attr("data-src"));
    });
});