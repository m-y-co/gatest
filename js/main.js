(this.jQuery) && (function ($) {

	'use strict';

	// DOMContentLoaded
	$(function(){

		var sp_width = 767; // smart phone max-width
		var sp_mode = spModeCheck();

		/* window event
		--------------------------------------------------*/
		var timer = null;

		$(window).on("resize", function(){
			clearTimeout(timer);
			timer = setTimeout(function(){
				sp_mode = spModeCheck();
			}, 300);
		});

		function spModeCheck(){
			var windowWidth = $(window).width();
			if (windowWidth <= sp_width){
				return true;
			} else {
				return false;
			}
		}

	}); // DOMContentLoaded

})(this.jQuery);
