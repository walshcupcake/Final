$(document).ready(function(){

	var colors = ["#ff353f", "#ffee00", "#05ddff", "#d059ff"]

	$('li').on("mouseover", function() {
    	var index = $("li").index(this);
    	console.log(index);
    	$(this).find('a').css("color", colors[index]);

    });

    $('li').on("mouseout", function() {
    	$(this).find('a').css("color", "white");

  	});
  	
	$(function() {
    $('body').removeClass('fade-out');
});
});