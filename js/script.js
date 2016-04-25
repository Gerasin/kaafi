$(document).ready(function(){


	$('.slider_box').owlCarousel({
	    loop:true,
	    margin:0,
	    nav:true,
	    items:1
	});

	var eachItem = 0;
	$('.slider_box .owl-dot').each(function(){
		eachItem = ++eachItem;
		$(this).html(eachItem);
	});



	/*LANG SELECT*/
	var	langSelect = $('.lang__select'),
		langList = $('.lang__list');

	langSelect.click(function(event) {
		event.preventDefault();
		langList.slideToggle(400);
	});


	/*FANCYBOX*/
	$('.fancybox').fancybox();

	$("a[rel=team]").fancybox({
        'transitionIn'      : 'fade',
        'transitionOut'     : 'fade'
    });

    $('.team-popup__prev').click(function(event) {
		event.preventDefault();
		$('.fancybox-prev').trigger('click');
    });

    $('.team-popup__next').click(function(event) {
		event.preventDefault();
		$('.fancybox-next').trigger('click');
    });


	/*PHONE MASK*/
	if($('.mobile-mask').length){
		$.mask.definitions['~'] = "[+-]";
		$('.mobile-mask').mask('9(999) 999-99-99');
	}



	/*BURGER*/
	$('.burger').click(function(event) {
    	event.preventDefault();
    	$('body').toggleClass('burger-open');
    });
});