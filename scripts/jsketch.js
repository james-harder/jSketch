$(document).ready(function() {
	for (var i = 0; i < resolution; i++) {
		$(".container").append('<div class="pixel"></div>');
	};
	$(".pixel").width(pixelSize);
	$(".pixel").height(pixelSize);
	//console.log(pixelSize);
	$('.pixel').hover(
		function(){
			$(this).css({"background": "#555"});
		}, function() {
			//$(this).css({"background": "#369"});
		}
	);
	$('button').on('click', function(){
		$('.pixel').css({"background": "#369"})
	});
});

var resolution = prompt("how many pixels?") ;
var pixelSize = (480/Math.sqrt(resolution) - 2) ;
//console.log(pixelSize);
//var $container = $(".container")
