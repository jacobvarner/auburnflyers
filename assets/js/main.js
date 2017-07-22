jQuery(document).ready(function ($) {
  $(document).on("scroll", function() {
  	if ($(document).scrollTop() > 50) {
  	  $("header").addClass("shrink");
      $("#header-logo").addClass("shrink-logo");
      $("nav#navigation").addClass("right-adjust");
      //$("#mobile-navigation").css('top','60px')
  	} else {
  	  $("header").removeClass("shrink");
      $("#header-logo").removeClass("shrink-logo");
      $("nav#navigation").removeClass("right-adjust");
      //$("#mobile-navigation").css('top','10%')
  	}
  });

  $("#menu-icon").click(function () {
    if ($("#mobile-navigation").height() === 0) {
      $("#mobile-navigation").height("260px");
      $("#menu-icon").removeClass("fa-bars");
      $("#menu-icon").addClass("fa-close");
      $("#header-logo").css('opacity','0');
    } else {
      $("#mobile-navigation").height("0px");
      $("#menu-icon").removeClass("fa-close");
      $("#menu-icon").addClass("fa-bars");
      $("#header-logo").css('opacity','1');
    }
  });

  $(".dropdown-toggle").click(
    function() {
      if ($(this).parent().nextAll(".results-container").height() === 0) {
        $(this).parent().nextAll(".results-container").css("max-height","1000px");
        $(this).removeClass("fa-bars");
        $(this).addClass("fa-close");
      } else {
        $(this).parent().nextAll(".results-container").css("max-height","0");
        $(this).removeClass("fa-close");
        $(this).addClass("fa-bars");
      }
  });

  $(".rider").hover(
    function() {
      $(this).toggleClass('overlay')
    }
  )
});
