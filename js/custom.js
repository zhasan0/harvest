(function ($) {
 "use strict";

// ====Custom-owl-carousel.js========
$('.owl-carousel').owlCarousel({
    rtl:true,
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
});

// =========custom-jquery.fancybox.min.js=========
//FANCYBOX
$(".fancybox").fancybox({
     openEffect: "none",
    closeEffect: "none"
});

//jQuery for page scrolling feature - requires jQuery Easing plugin
 $(document).on('click', 'a.page-scroll', function(event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top
    }, 1500, 'easeInOutExpo');
    event.preventDefault();
});

 // ========Scroll-Top===========
 //Check to see if the window is top if not then display button
 $(window).scroll(function(){
     if ($(this).scrollTop() > 1000) {
         $('.scrollToTop').fadeIn();
     } else {
         $('.scrollToTop').fadeOut();
     }
 });
     
 //Click event to scroll to top
$('.scrollToTop').click(function(){
    $('html, body').animate({scrollTop : 0},800);
    return false;
});

})(jQuery);  

