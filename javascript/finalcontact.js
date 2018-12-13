$(document).ready(function(){


	$('li').on("mouseover", function() {
    	$(this).find('a').css("color", "#ff353f");
    });

	$('li').on("mouseout", function() {
    	$(this).find('a').css("color", "white");

    });

  	$('h1').on("mouseover", function() {
    	$(this).css("color", "#ff353f");
    });

	$('h1').on("mouseout", function() {
    	$(this).css("color", "#595959");

    });

    });


