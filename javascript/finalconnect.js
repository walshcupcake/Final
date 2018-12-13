$(document).ready(function(){

	$('li').on("mouseover", function() {
    	$(this).find('a').css("color", "#ffee00");
    });

	$('li').on("mouseout", function() {
    	$(this).find('a').css("color", "white");

    });

	  $('h1').on("mouseover", function() {
	  	console.log(this)
    	$(this).css("color", "#ffee00");
    });

	$('h1').on("mouseout", function() {
    	$(this).css("color", "#595959");

    });
});