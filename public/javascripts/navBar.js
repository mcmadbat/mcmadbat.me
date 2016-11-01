// handles navigation bar functions

$(function () {

	// sets active class
	$("#navigationBar a").on("click", function(){
	   $(".nav").find(".active").removeClass("active");
	   $(this).parent().addClass("active");

	   // collapse
	   $('#navigationBar').collapse ( 'hide' );
	});
});	

