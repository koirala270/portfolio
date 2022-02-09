jQuery(function ($) {

    //  HEADER SLIDE /CAROUSEL SECTION FUNCTION 
	$(function(){
		$('#slide-head.carousel').carousel({
			interval: 2000,
			pause: false
		});
	});

	

    // LINKS SCROLLING FUNCTION 
	$('.navbar-nav > li').click(function(event) {
		event.preventDefault();
		var target = $(this).find('>a').prop('hash');
		$('html, body').animate({
			scrollTop: $(target).offset().top
		}, 500);
	});

	
    // PRETTYPHOTO FUNCTION 
	$("a.preview").prettyPhoto({
		social_tools: false
	});

	

    /*==========================================
 SCROLL REVEL SCRIPTS
 =====================================================*/


	window.scrollReveal = new scrollReveal();




});