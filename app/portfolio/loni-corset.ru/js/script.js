$(document).ready(function() {

	$('form').each(function() {
    var $form = $(this);
    $form.validate({
      submitHandler: function() {
        $.ajax({
          type: $form.attr('method'),
          url: $form.attr('action'),
          data: $form.serialize()
        }).done(function() {
          location.href = "#mail-done";
          if ($form.find("input[name='sell']").length) {
            $(".sells-number").html($(".sells-number").html() -1);
          }
        }).fail(function() {
          location.href = "#mail-fail";
        });
        $form.find("input[type='text']").val('');
        return false;
      }
    });
  });
    
	$(".phoneform").inputmask("+7(999)999-99-99", {
		"clearIncomplete": true
	});

  $("#photos2-slider").owlCarousel({
    singleItem : false,
    navigation : true,
    navigationText : ['',''],
    autoPlay : false,
    stopOnHover : true,
    pagination: false,
    itemsTablet: false,
    itemsMobile: false
  });
  /*
  $("#reviews-slider").owlCarousel({
    singleItem : true,
    navigation : true,
    navigationText : ['',''],
    autoPlay : false,
    stopOnHover : true
  });

  google.maps.event.addDomListener(window, "load", initialize);
  function initialize() {
    var mapOptions = {
      center: new google.maps.LatLng(55.783259, 37.717576),
      zoom: 17,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById("map_canvas"),
        mapOptions);

    var point = new google.maps.LatLng(55.782710, 37.718692);
    var marker = new google.maps.Marker({
      position: point,
      map: map
    });
  }
  */

  setTimeout(function() {
    $("#results-widget").twentytwenty();
  }, 2000)

  $(".products-size-selection").click(function() {
    $(this).addClass("active").siblings().removeClass("active");

    var size = $(this).html().trim();
    var href = $(this).closest(".products-item-text-block").find(".buy-btn").attr("href");
    $(href).next().find("input[name='size']").val(size);
  });

  $(".quantity").change(function() {
    var amount = $(this).find("option:selected").text().trim();
    var href = $(this).closest(".products-item-text-block").find(".buy-btn").attr("href");
    $(href).next().find("input[name='amount']").val(amount);
  });


  var vid1 = document.getElementById("video1"); 
  var vid2 = document.getElementById("video2");

  function playVid1() { 
      vid1.play(); 
  }

  function playVid2() { 
      vid2.play(); 
  }

  $("#video1-play").click(function() {
      vid1.play(); 
      $(this).hide();
  });

  $("#video2-play").click(function() {
      vid2.play(); 
      $(this).hide();
  });

  $('a[href*=#m-]').bind("click", function(e){
    var anchor = $(this);
    $('html, body').stop().animate({
       scrollTop: $(anchor.attr('href')).offset().top
    }, 1000);
    e.preventDefault();
  });
});
