function bqnInit() {
	var windowHeight = $(window).height();
	var windowWidth = $(window).width();

	if (windowWidth >= windowHeight) {
		console.log("width");
		$('#home-container').css('top', '50px');
		$('#home-container').height(windowHeight - 100);
		$('#home-container').css('left', windowWidth / 2 - (windowHeight - 100) / 2);
		$('#home-container').width(windowHeight - 100);
		$('#home-container').css('line-height', windowHeight - 100);
		$('#home-container').find('h1').css('font-size', $('#home-container').width() / 100 + 'em');
		$('#home-container').find('h6').css('font-size', $('#home-container').width() / 300 + 'em');
	} else {
		console.log("height");
		$('#home-container').css('top', windowHeight / 2 - (windowWidth - 100) / 2);
		$('#home-container').height(windowWidth - 100);
		$('#home-container').css('left', '50px');
		$('#home-container').width(windowWidth - 100);
		$('#home-container').css('line-height', windowWidth - 100);
		$('#home-container').find('h1').css('font-size', $('#home-container').width() / 100 + 'em');
		$('#home-container').find('h6').css('font-size', $('#home-container').width() / 300 + 'em');
	}
};

$(document).ready(function() {
	bqnInit();
	$(window).resize(function() {
		bqnInit();
	});
});