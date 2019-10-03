jQuery(document).ready(function($) {
	'use strict';
	function onScrollInit( items, trigger ) {
	  items.each( function() {
		var classElement = $(this).attr("class");
		var animate = classElement.replace("anim-",'');

		var animateElement = $(this),
			animateAnimationClass = animate[1];

			var animateTrigger = ( trigger ) ? trigger : animateElement;
			
			animateTrigger.waypoint(function() {
			  animateElement.addClass('animated').addClass(animate);
			  },{
				  triggerOnce: true,
				  offset: '90%'
			});
	  });
	}
	 onScrollInit( $('.animate') );
});