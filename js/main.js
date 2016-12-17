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

		/* toppage slider*/
		if (sp_mode) {
		} else {
			$(".bxslider").bxSlider({
				slideMargin: 0,
				pager: false,
				controls: true,
				auto: true,
				pause: 5000,
				autoHover: true
			});
		}

		/* rollover
		----------------------------------------------------*/
		$("body").on({
			"mouseenter" : function(){
				if (!sp_mode) {
					var src = $(this).attr("src");
					if (src.indexOf("_off.") != -1) {
						var onSrc = src.replace("_off.", "_on.");
						$(this).attr("src", onSrc);
					};
				}
			},
			"mouseleave" : function(){
				if (!sp_mode) {
					var src = $(this).attr("src");
					if (src.indexOf("_on.") != -1) {
						var offSrc = src.replace("_on.", "_off.");
						$(this).attr("src", offSrc);
					};
				}
			}
		}, "a img");
		
		/* ga test
		----------------------------------------------------*/
		$("#js_item4").click(function(){
			ga('send', 'event', 'js_test', 'item4をクリック！', 'item4', 4, {'nonInteraction':1});
		});

	}); // DOMContentLoaded

})(this.jQuery);
