$(function() {
	$("#annotation").on('click', function(e) {
    	$(".wrapper-pop-up-annotation").css("display", "block");
    	$(".pop-up-annotation").css("display", "block");
	});
	$(".icon-close").on('click', function(e) {
    	$(".wrapper-pop-up-annotation").css("display", "none");
    	$(".pop-up-annotation").css("display", "none");
    	$(".pop-up-literal").css("display", "none");
	});
	$(".literals").on('click', function(e) {
    	$(".wrapper-pop-up-annotation").css("display", "block");
    	$(".pop-up-literal").css("display", "block");
	});
});
