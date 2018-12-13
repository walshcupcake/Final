$(document).ready(function(){

	$('li').on("mouseover", function() {
    	$(this).find('a').css("color", "#d059ff");
    });

	$('li').on("mouseout", function() {
    	$(this).find('a').css("color", "white");

    });

	var slideIndex = 0;
	showSlides();

	function showSlides() {
  		var i;
  		var slides = document.getElementsByClassName("mySlides");
  		for (i = 0; i < slides.length; i++) {
   		 slides[i].style.display = "none"; 
  	}
  	slideIndex++;
  	if (slideIndex > slides.length) {slideIndex = 1} 
  	slides[slideIndex-1].style.display = "block"; 
  	setTimeout(showSlides, 4000);
	}

	$("button").click(function(){
  		$("div").animate({left: '250px'});
	}); 

		$('h1').on("mouseover", function() {
    	$(this).css("color", "#d059ff");
    });

	$('h1').on("mouseout", function() {
    	$(this).css("color", "#595959");

    });

});