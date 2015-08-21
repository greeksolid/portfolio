$(document).ready(function() {

	// Display navigation menu and change icon
	$(".nav-button").on('click', function() {
		$("nav").toggle(200);
		$(".nav-button").toggleClass("nav-icon close-icon");
	});

});