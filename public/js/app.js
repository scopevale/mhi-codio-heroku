$(document).foundation();

/**
 * Author: Gary Smith <scopevale@gmail.com>
 * 
 * various jQuery events for Navigation
**/
(function(){
	var bgColour;

	$('#navbar a').mouseover(function() {
		var jQBar = $(this).next('div.menu-item-bottom');
		bgColour = jQBar.css("background-color");
		var colour = jQBar.find('div.lozenge').css("background-color");
		jQBar.css({'background-color' : colour});
		// $(this).css({'color' : colour});
	});

	$('#navbar a').mouseout(function() {
		// $(this).css({'color' : bgColour});
		$(this).next('div.menu-item-bottom').css({'background-color' : bgColour});
	});

// 	$('#disclaimer > h5').click(function() {
// 		$('#disclaimer-modal').dialog({
// 			height: 320,
// 			width: 500,
// 			modal: true
// 		});
//	});

})();
