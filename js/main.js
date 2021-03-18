$(document).ready(function(){
    $('.slider').slick({
        infinite: true,
        arrows: true,
        // dots:true,
        autoplay:true
    });

    $("nav li a").click(function () {
		elementClick = $(this).attr("href");
		destination = $(elementClick).offset().top;
		$("body,html").animate({scrollTop: destination }, 1000);
	});
    
});