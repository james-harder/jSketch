$(document).ready(function() {
	$('#reset').on('click', function(){
		console.log("setGrid returned " + setGrid(prompt("how many rows?")));
		console.log("clearColors returned " + clearColors());
	});
	$('#clearColors').on('click', function() {
		console.log("clearColors returned " + clearColors());
	});
	/*$('.pixel').hover(
		function(){
			$(this).css({"background": "#555"});
		}, function() {
			$(this).css({"background": "#333"});
		}
	);*/
});

function setGrid(gridSize) {
	var numberOfPixels = gridSize * gridSize ;
	var pixelSize = (480/(gridSize) - 2) ;
	$('.pixel').remove();
	for (var i = 0; i < numberOfPixels; i++) {
		$(".container").append('<div class="pixel"></div>');
	};
	$(".pixel").width(pixelSize);
	$(".pixel").height(pixelSize);
	//console.log(pixelSize);
	
	$('.pixel').hover(
		function(){
			$(this).css({"background": "#555"});
		}, function() {
			$(this).css({"background": "#333"});
		}
	);
	
	return true;
};

function clearColors() {
	$('.pixel').css({"background": "#369"});
	return true;
};