$(document).ready(function(){

	$('li').on("mouseover", function() {
    	$(this).find('a').css("color", "#05ddff");
    });

	$('li').on("mouseout", function() {
    	$(this).find('a').css("color", "white");

    });

     $('h1').on("mouseover", function() {
    	$(this).css("color", "#05ddff");
    });

	$('h1').on("mouseout", function() {
    	$(this).css("color", "#595959");

    });

});