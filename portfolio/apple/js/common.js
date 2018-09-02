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
window.container = $(".sent-message-right");
window.global_container = $(".contact-wrapper");
global_container.hide();
$(".connect").click(function(){
  global_container.show();
  container.show();
});
$(".b-exit").click(function(){
  global_container.hide();
  container.hide();
});
$(document).mouseup(function (e) {
    if (global_container.has(e.target).length === 0){
        global_container.hide();
        container.hide();
    }
});


});
