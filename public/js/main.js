!function(e){"use strict";if(e(window).on("load",(function(){e(".preloader").length&&e(".preloader").delay(200).fadeOut(500)})),e(".menu-area li.menu-item-has-children ul").length&&e(".menu-area .navigation li.menu-item-has-children").append('<div class="dropdown-btn"><span class="fas fa-angle-down"></span></div>'),e(".mobile-menu").length){var t=e(".menu-area .main-menu").html();e(".mobile-menu .menu-box .menu-outer").append(t),e(".mobile-menu li.menu-item-has-children .dropdown-btn").on("click",(function(){e(this).toggleClass("open"),e(this).prev("ul").slideToggle(300)})),e(".mobile-nav-toggler").on("click",(function(){e("body").addClass("mobile-menu-visible")})),e(".menu-backdrop, .mobile-menu .close-btn").on("click",(function(){e("body").removeClass("mobile-menu-visible")}))}(e(window).on("scroll",(function(){e(window).scrollTop()<245?(e("#sticky-header").removeClass("sticky-menu"),e(".scroll-to-target").removeClass("open"),e("#header-fixed-height").removeClass("active-height")):(e("#sticky-header").addClass("sticky-menu"),e(".scroll-to-target").addClass("open"),e("#header-fixed-height").addClass("active-height"))})),e(".single-item-carousel").length&&e(".single-item-carousel").owlCarousel({animateOut:"fadeOut",animateIn:"fadeIn",loop:!0,margin:0,nav:!0,smartSpeed:500,autoplay:6e3,navText:['<span class="fal fa-caret-left"></span>','<span class="fal fa-caret-right"></span>'],responsive:{0:{items:1},600:{items:1},800:{items:1},1024:{items:1},1200:{items:1}}}),e(".testimonial-area-slider").length&&e(".testimonial-area-slider").owlCarousel({loop:!0,nav:!1,items:3,autoplay:!0,smartSpeed:2e3,dots:!1,responsive:{0:{items:1,nav:!1},600:{items:2,nav:!1}}}),e(".partner-carousel").length)&&e(".partner-carousel").owlCarousel({items:1,nav:!1,margin:80,loop:!0,autoplay:!0,smartSpeed:2e3,responsive:{0:{items:1},375:{items:2},767:{items:3},991:{items:4},1199:{items:5}}});e(".services-item-carousel").length&&e(".services-item-carousel").owlCarousel({loop:!0,margin:30,nav:!0,smartSpeed:500,autoplay:6e3,navText:['<span class="fal fa-caret-left"></span>','<span class="fal fa-caret-right"></span>'],responsive:{0:{items:1},600:{items:2},800:{items:2},1024:{items:3},1200:{items:4}}}),e(".scroll-to-target").length&&e(".scroll-to-target").on("click",(function(){var t=e(this).attr("data-target");e("html, body").animate({scrollTop:e(t).offset().top},1e3)})),e(".counter").counterUp({delay:10,time:1e3}),e(document).ready((function(){e("select").niceSelect()})),function(e){e(".tab ul.tabs").addClass("active").find("> li:eq(0)").addClass("current"),e(".tab ul.tabs li a").on("click",(function(t){var a=e(this).closest(".tab"),n=e(this).closest("li").index();a.find("ul.tabs > li").removeClass("current"),e(this).closest("li").addClass("current"),a.find(".tab_content").find("div.tabs_item").not("div.tabs_item:eq("+n+")").slideUp(),a.find(".tab_content").find("div.tabs_item:eq("+n+")").slideDown(),t.preventDefault()}))}(jQuery),e(".input-counter").each((function(){var e=jQuery(this),t=e.find('input[type="text"]'),a=e.find(".plus-btn"),n=e.find(".minus-btn"),i=t.attr("min"),s=t.attr("max");a.on("click",(function(){var a=parseFloat(t.val());if(a>=s)var n=a;else n=a+1;e.find("input").val(n),e.find("input").trigger("change")})),n.on("click",(function(){var a=parseFloat(t.val());if(a<=i)var n=a;else n=a-1;e.find("input").val(n),e.find("input").trigger("change")}))})),e(document).ready((function(){(new WOW).init()})),e(".popup-link").magnificPopup({type:"image",gallery:{enabled:!0}})}(jQuery);