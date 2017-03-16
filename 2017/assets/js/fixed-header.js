(function($){
	'use strict';
	
	$(window).scroll(function(){
		if ($(window).scrollTop() >= 102) {
			$('.header-wrapper').addClass('fixed-header');
		}
		else {
			$('.header-wrapper').removeClass('fixed-header');
		}
	});

} )( jQuery );