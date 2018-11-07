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
		        if(wid > 778 && menu.is(':hidden')) {
		            menu.removeAttr('style');
		        }
		    });
        $('.a_remove').on('click', function(e){
  menu.removeAttr('style');
        $(".container-button").removeClass('change');
});});
window.container = $(".sent-message-right");
window.global_container = $(".contact-wrapper");
global_container.hide();
$(".connect").click(function(){
  global_container.show();
  container.show();
});
if($(window).width() < 768) {
	$(".nav li").click(function(){
		$(".nav").animate({
			width: "toggle"
		});
		$(".container-button").removeClass('change');
	})
};
$(window).scroll(function() {
    var $first_link = $('#auto-oper');
    var $two_link = $('#auto-pay'); 
    var $tree_link = $('#adventage'); 
    var $for_link = $('#our-clientage'); 
    var $five_link = $('#about-company'); 
    var $menu1 = $('.menu1');
    var $menu2 = $('.menu2');
    var $menu3 = $('.menu3');
    var $menu4 = $('.menu4');
    var $menu5 = $('.menu5');
    var $line = $('.height_line');
    var wids = $(window).width();
    if($(window).scrollTop() >= 0) { 
        $menu1.addClass('active-link'); 
    }
    if($(window).scrollTop() > $two_link.offset().top - 5) { 
        $menu2.addClass('active-link');
        $menu1.removeClass('active-link'); 
    } else {
        $menu2.removeClass('active-link'); 
    }
    if($(window).scrollTop() > $tree_link.offset().top - 5) {
        $menu3.addClass('active-link');
        $menu2.removeClass('active-link');
    } else {
        $menu3.removeClass('active-link'); 
    }
    if($(window).scrollTop() > $for_link.offset().top - 5) {
        $menu4.addClass('active-link');
        $menu3.removeClass('active-link');
    } else {
        $menu4.removeClass('active-link'); 
    }
    if($(window).scrollTop() > $five_link.offset().top - 5) {
        $menu5.addClass('active-link');
        $menu4.removeClass('active-link');
    } else {
        $menu5.removeClass('active-link'); 
    }
});
$(document).mouseup(function (e) {
    if (global_container.has(e.target).length === 0){
        global_container.hide();
        container.hide();
    }
});
$(document).ready(function() {

	//E-mail Ajax Send
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "../mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Спасибо за обращение! Мы обязательно Вам ответим");
			global_container.hide();
 			container.hide();
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

});
});
