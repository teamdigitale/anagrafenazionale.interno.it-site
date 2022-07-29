$(document).ready(function () {
    var hieghtThreshold = $(".main-nav").offset().top;
    var menu = $('.main-nav .navbar');
    var access = $('.access-sticky');
    var anchor = $('.anchor-point');

      $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        
        //menu sticky
        if (scroll >= hieghtThreshold ) {
            menu.addClass('fixed');
            access.addClass('fixed');
            anchor.addClass('fixed');
        } else {
            menu.removeClass('fixed');
            access.removeClass('fixed');
            anchor.removeClass('fixed');
        }

        
    });

    

    $('#navbar-menu').on('hidden.bs.offcanvas', function () {
      $(".navbar-toggler").active();
     })
      


    /*menu mobile*/
   /*$( ".navbar-toggler" ).click(function() {
      $("body").toggleClass("overflow-scroll");
    });*/
    
});

$( ".indice-laterale .nav-link" ).click(function() {
  $( ".indice-laterale .accordion-collapse" ).removeClass("show");
  $( ".indice-laterale .accordion-button" ).addClass("collapsed");
});

//scroll to top
var scrollTopBtn = $('#scroll-top-btn');
$(window).scroll(function() {
	if ($(window).scrollTop() > 300) {
		scrollTopBtn.addClass('back-to-top-show');
	} else {
		scrollTopBtn.removeClass('back-to-top-show');
	}
});
scrollTopBtn.click(function(e) {
	e.preventDefault();
	$('html, body').animate({scrollTop:0}, 'slow');
});