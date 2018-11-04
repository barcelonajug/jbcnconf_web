(function($){
	'use strict';
	
	$(function(){
		var controlwpadminbar = $("#wpadminbar").is("div");
		if(controlwpadminbar == "") {
		} else {
			$('#wpadminbar').addClass('fixed');
			var controlwpadminbarh = $("#wpadminbar").height();
			var controltopareah = $(".header").height();
			$('.admin-bar .header-wrapper.header-alternative').css('top',controlwpadminbarh + 'px');
		}
	});
		
} )( jQuery );