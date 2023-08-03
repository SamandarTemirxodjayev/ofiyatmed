(function ($){
	"use strict";

/*=============================================
	=    		 Preloader			      =
=============================================*/
	function preloader() {
		if($('.preloader').length){
			$('.preloader').delay(200).fadeOut(500);
		}
	}
$(window).on('load', function () {
	preloader();
});

/*=============================================
	=    		Mobile Menu			      =
=============================================*/
//SubMenu Dropdown Toggle
if ($('.menu-area li.menu-item-has-children ul').length) {
	$('.menu-area .navigation li.menu-item-has-children').append('<div class="dropdown-btn"><span class="fas fa-angle-down"></span></div>');

}

//Mobile Nav Hide Show
if ($('.mobile-menu').length) {

	var mobileMenuContent = $('.menu-area .main-menu').html();
	$('.mobile-menu .menu-box .menu-outer').append(mobileMenuContent);

	//Dropdown Button
	$('.mobile-menu li.menu-item-has-children .dropdown-btn').on('click', function () {
		$(this).toggleClass('open');
		$(this).prev('ul').slideToggle(300);
	});
	//Menu Toggle Btn
	$('.mobile-nav-toggler').on('click', function () {
		$('body').addClass('mobile-menu-visible');
	});

	//Menu Toggle Btn
	$('.menu-backdrop, .mobile-menu .close-btn').on('click', function () {
		$('body').removeClass('mobile-menu-visible');
	});
}



/*=============================================
	=     Menu sticky & Scroll to top      =
=============================================*/
$(window).on('scroll', function () {
	var scroll = $(window).scrollTop();
	if (scroll < 245) {
		$("#sticky-header").removeClass("sticky-menu");
        $('.scroll-to-target').removeClass('open');
		$("#header-fixed-height").removeClass("active-height");

	} else {
		$("#sticky-header").addClass("sticky-menu");
        $('.scroll-to-target').addClass('open');
		$("#header-fixed-height").addClass("active-height");
	}
});
/*=============================================
	=    		 Main Slider  	         =
=============================================*/
if ($('.single-item-carousel').length) {
		$('.single-item-carousel').owlCarousel({
			animateOut: 'fadeOut',
    	animateIn: 'fadeIn',
			loop:true,
			margin:0,
			nav:true,
			//autoHeight: true,
			smartSpeed: 500,
			autoplay: 6000,
			navText: [ '<span class="fal fa-caret-left"></span>', '<span class="fal fa-caret-right"></span>' ],
			responsive:{
				0:{
					items:1
				},
				600:{
					items:1
				},
				800:{
					items:1
				},
				1024:{
					items:1
				},
				1200:{
					items:1
				}
			}
		});
	}
	/* ==========================================================================
   Testimonial
   ========================================================================== */
 if($('.testimonial-area-slider').length) {
		$('.testimonial-area-slider').owlCarousel({
			loop:true,
			nav:false,
			items: 3,
			autoplay:true,
			smartSpeed:2000,
			dots:false,
			responsive:{
        0:{
            items:1,
            nav:false
        },
        600:{
            items: 2,
            nav:false
        }
    }
	})
	}
/* ==========================================================================
   Partner
   ========================================================================== */
	if ($(".partner-carousel").length) {
		var owl = $(".partner-carousel");
		owl.owlCarousel({
			items: 1,
			nav:false,
			margin: 80,
			loop: true,
			autoplay:true,
			smartSpeed:2000,
			responsive:{
				0:{
						items:1,
				},
				375:{
						items:2,
				},
				767:{
						items:3,
				},
				991:{
						items:4,
				},
				1199: {
					items:5
				}
			}
		});
	}
/*=============================================
	=    		 Services Slider  	         =
=============================================*/
	if ($('.services-item-carousel').length) {
		$('.services-item-carousel').owlCarousel({
			//animateOut: 'fadeOut',
    		//animateIn: 'fadeIn',
			loop:true,
			margin:30,
			nav:true,
			//autoHeight: true,
			smartSpeed: 500,
			autoplay: 6000,
			navText: [ '<span class="fal fa-caret-left"></span>', '<span class="fal fa-caret-right"></span>' ],
			responsive:{
				0:{
					items:1
				},
				600:{
					items:2
				},
				800:{
					items:2
				},
				1024:{
					items:3
				},
				1200:{
					items:4
				}
			}
		});
	}
/*=============================================
	=    		 Scroll Up  	         =
=============================================*/
	if ($('.scroll-to-target').length) {
	  $(".scroll-to-target").on('click', function () {
	    var target = $(this).attr('data-target');
	    // animate
	    $('html, body').animate({
	      scrollTop: $(target).offset().top
	    }, 1000);

	  });
	}

/*=============================================
	=    		Jquery Counter up		      =
=============================================*/
	$('.counter').counterUp({
		delay: 10,
		time: 1000,
	});
/*=============================================
	=    		Jquery Nice Select     =
 =============================================*/
	$(document).ready(function() {
	     $('select').niceSelect();
	    });    
		 

/*=============================================
    =           Tabs          =
=============================================*/
	(function ($) {
	    $('.tab ul.tabs').addClass('active').find('> li:eq(0)').addClass('current');
	    $('.tab ul.tabs li a').on('click', function (g) {
	        var tab = $(this).closest('.tab'), 
	        index = $(this).closest('li').index();
	        tab.find('ul.tabs > li').removeClass('current');
	        $(this).closest('li').addClass('current');
	        tab.find('.tab_content').find('div.tabs_item').not('div.tabs_item:eq(' + index + ')').slideUp();
	        tab.find('.tab_content').find('div.tabs_item:eq(' + index + ')').slideDown();
	        g.preventDefault();
	    });
	})(jQuery);
    /*=============================================
    =           Input Plus & Minus Number JS          =
    =============================================*/
	    $('.input-counter').each(function() {
	        var spinner = jQuery(this),
	        input = spinner.find('input[type="text"]'),
	        btnUp = spinner.find('.plus-btn'),
	        btnDown = spinner.find('.minus-btn'),
	        min = input.attr('min'),
	        max = input.attr('max');
	        
	        btnUp.on('click', function() {
	            var oldValue = parseFloat(input.val());
	            if (oldValue >= max) {
	                var newVal = oldValue;
	            } else {
	                var newVal = oldValue + 1;
	            }
	            spinner.find("input").val(newVal);
	            spinner.find("input").trigger("change");
	        });
	        btnDown.on('click', function() {
	            var oldValue = parseFloat(input.val());
	            if (oldValue <= min) {
	                var newVal = oldValue;
	            } else {
	                var newVal = oldValue - 1;
	            }
	            spinner.find("input").val(newVal);
	            spinner.find("input").trigger("change");
	        });
	    });
/*=============================================
	=    	 Wow Js	      =
=============================================*/
	    $(document).ready(function() {
	     new WOW().init();
	    });  

/*=============================================
	=    	magnificPopup img view	      =
 =============================================*/
	$('.popup-link').magnificPopup({
		type: 'image',
		gallery: {
		  enabled: true,
		}
	});



})(jQuery);