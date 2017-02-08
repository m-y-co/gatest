//-----------------------------------
// SNS JavaScript
//-----------------------------------
$(function(){
	// Slide Moving.
	var slide = $('.sns-slide');
	var slideWidth = slide.width();
	slide.width(slideWidth);

	var useiPhone = navigator.userAgent.indexOf('iPhone') > 0;
	var useiPad = navigator.userAgent.indexOf('iPad') > 0;
	var useiPod = navigator.userAgent.indexOf('iPod') > 0;
	var useAndroid = navigator.userAgent.indexOf('Android') > 0;

	if (useiPhone || useiPad || useiPod || useAndroid) {
		slide.css('right', -slideWidth);
	} else {
		$('#sns .arrow').mouseenter(function() {
			var slideMove = slideWidth - $(this).width() + 37;

			$(this).find('span').css('background-position','-12px -43px');
			slide.stop().animate({right: -slideMove}, 400, 'easeOutExpo');
		});
		slide.mouseleave(function(){
			$(this).find('span').css('background-position','0 -43px');
			slide.stop().animate({right: '-37px'}, 800, 'easeOutExpo');
		});
	}

	//  Link replace.
	var url = encodeURIComponent(document.URL);
	var title = encodeURIComponent(document.title);

	$('.sns-slide li a').each(function(){
		var $this = $(this);
		var href = $this.attr('href').replace(/#link/ig, url).replace(/#text/ig, title);

		$this.attr('href', href);
	 });
});
//-----------------------------------