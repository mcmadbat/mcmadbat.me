// handles navigation bar functions

$(function () {
	// sets active class
	$("#navBar a").on("click", function(){
	   $(".nav").find(".active").removeClass("active");
	   $(this).parent().addClass("active");

	   // collapse
	   $('#navBar').collapse ( 'hide' );
	});
});	

