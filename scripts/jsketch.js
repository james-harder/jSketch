$(document).ready(function() {
 $('.pixel').hover(
		function(){
			$(this).css({"background": "#555"});
		}, function() {
			$(this).css({"background": "#369"});
		}
	);
});